package common;
import sonar.SonarDistanceDetector;
import webcam.WebcamDistanceDetector;

public class CombinedWebcamSonarDistanceDetector implements IDistanceDetector  {
	private SonarDistanceDetector sonar;
	private HistoryOfDoubles sonarHistory = new HistoryOfDoubles(3);
	private WebcamDistanceDetector webcam;
	
	public CombinedWebcamSonarDistanceDetector(){
		sonar = new SonarDistanceDetector();
		sonar.start();
		webcam =  new WebcamDistanceDetector();
		webcam.start();
	}
	
	public CombinedWebcamSonarDistanceDetector(SonarDistanceDetector sonar, WebcamDistanceDetector webcam){
		this.sonar = sonar;
		this.webcam = webcam;
	}
	
	public Double getDistance(){
	    Double sonarDistance =  null;
	    Double webcamDistance = null;
	    long webcamMeasureAge = 0;
	    while(sonarDistance == null || webcamDistance == null){
	    	sonarDistance = sonar.getDistance();
		    webcamDistance = webcam.getDistance();
		    webcamMeasureAge = webcam.timeSinceMeasure();
	    }
    	sonarHistory.add(sonarDistance);
	    if( webcamMeasureAge > 1000){
	    	return sonarHistory.min();
	    }
	    return Math.min(sonarHistory.average(),webcamDistance);
	}
    
	public static void main( String[] args ) throws Exception {
		CombinedWebcamSonarDistanceDetector detector = new CombinedWebcamSonarDistanceDetector();
		
		HistoryOfDoubles history = new HistoryOfDoubles(10);
		while(true){
			Thread.sleep(100);
			history.add(detector.getDistance());
			System.out.println(history.last()+" "+history.average());
		}
	}

	public void start() {
		//ouh c'est moche
	}
}
