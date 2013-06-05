package common;

import java.io.IOException;
 
public abstract class AbstractDistanceDetectorRunnable implements Runnable, IDistanceDetector {
	
	private Double  distance = null;
	private boolean fresh = false;
	private long measureTime = 0;
	private long timeBetweenMeasures = 0;
	
	public void setTimeBetweenMeasures(long timeBetweenMeasures) {
		this.timeBetweenMeasures = timeBetweenMeasures;
	}

	protected synchronized void setDistance(Double distance ){
		if(distance == null){
			return;
		}
		measureTime = System.currentTimeMillis();
		this.distance = distance;
		fresh = true;
	}
	
	public synchronized long timeSinceMeasure(){
		return System.currentTimeMillis()-measureTime;
	}
	
	public synchronized Double getDistance() {
		fresh = false;
		return this.distance;
	}
	
	public boolean isFresh() {
		return fresh;
	} 

	public void run() {
		init();
		Double distance = null;
		try {
			while(true){
                Thread.sleep( timeBetweenMeasures );
				distance = detectDistance();
				if(distance != null){
					setDistance(distance);
				}
			}
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public  void start(){
    	new Thread(this).start();
	}
	
    public abstract Double detectDistance() throws IOException;

    public abstract void init() ;
}
