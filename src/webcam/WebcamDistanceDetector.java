package webcam;
import hypermedia.video.OpenCV;

import java.awt.Rectangle;

import common.AbstractDistanceDetectorRunnable;
import common.HistoryOfDoubles;
 
public class WebcamDistanceDetector  extends AbstractDistanceDetectorRunnable {
	
	private OpenCV cv = new OpenCV();
	private int CONVERSION_CONSTANT = 14000 ;

	public void init() {
	    //cv.capture( 320, 240 );
	    cv.capture( 960, 720 );
	    cv.cascade( OpenCV.CASCADE_FRONTALFACE_ALT );
	}

	private Integer detectClosestFaceMmWidth() {
		cv.read();
		Rectangle [] faces =  cv.detect( 1.2f, 2, OpenCV.HAAR_DO_CANNY_PRUNING, 20, 20 );
		Integer w = -1;
		for(Rectangle face : faces ){
			w = Math.max(w, face.width);
		}
		return w == -1 ? null: w;
	}

    private Double mmWidthToCmDistance(Integer width){
    	return width == null? null : CONVERSION_CONSTANT / width.doubleValue();
    }
    
    public Double detectDistance(){
		return mmWidthToCmDistance(detectClosestFaceMmWidth());
    }
    
    public static void main( String[] args ) throws Exception {
		System.out.println("thread starts now");
		
		WebcamDistanceDetector keep_on_detecting = new WebcamDistanceDetector();
		keep_on_detecting.start();
		HistoryOfDoubles history = new HistoryOfDoubles(10);
		keep_on_detecting.setTimeBetweenMeasures(0);
		long lastTime = 0;
		long duration = 0;
		while(true){
 			lastTime = System.currentTimeMillis();
            while(!keep_on_detecting.isFresh()){
		    }
		    duration = System.currentTimeMillis() - lastTime;
		    Double distance = keep_on_detecting.getDistance();
		    history.add(distance);
			System.out.println(distance+" " + history.average()+" "+ duration);
			
		}
	}

}
