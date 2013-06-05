package sonar;


import java.io.IOException;

import common.AbstractDistanceDetectorRunnable;
import common.HistoryOfDoubles;

public class SonarDistanceDetector extends AbstractDistanceDetectorRunnable  {
	private DistanceSensor sensor = new DistanceSensor();

	public Double detectDistance() throws IOException {
		return sensor.readInCm();
	}

	public void init() {
	}

	public static void main( String[] args ) throws Exception {
		System.out.println("thread starts now");
		
		SonarDistanceDetector keep_on_detecting = new SonarDistanceDetector();
		keep_on_detecting.start();
		HistoryOfDoubles history = new HistoryOfDoubles(10);
		
		while(true){
		   while(!keep_on_detecting.isFresh()){
			    Thread.sleep( 1000/5 );
		    }
		    Double distance = keep_on_detecting.getDistance();
		    history.add(distance);
			System.out.println(distance+" " + history.average());
		}
	}


}
