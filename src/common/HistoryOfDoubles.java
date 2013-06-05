package common;

import java.util.ArrayList;

public class HistoryOfDoubles {
	
	ArrayList <Double>  history = new ArrayList<Double>();
	private int maxLength ;
	
	public HistoryOfDoubles(int length){
		this.maxLength = length;
	}
	
	public  void add(Double distance ){
		if(distance == null){
			return;
		}
		history.add(0,distance);
	    if(history.size()>maxLength){
	    	history.remove(history.size()-1);
	    }
	}
	
	public  Double last() {
		return history.get(0);
	}
	
	public  Double average(){
	    Double sum = 0.0;
	    for(Double number: history){
	    	sum += number;
	    }
		return sum/history.size();
	}

	public  Double min(){
		if(history.isEmpty()){
			return null;
		}
		Double min = 10000.0;
	    for(Double number: history){
	    	min = Math.min(number, min);
	    }
		return min;
	}

}
