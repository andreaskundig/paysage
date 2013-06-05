package sonar;


import java.io.IOException;

import jd2xx.JD2XX;

public class DistanceSensor  {
	private JD2XX driver = new JD2XX();

	public synchronized Double readInCm() throws IOException {
        driver.open(0);
		 
	    byte [] message = {0x55,      // usb-12c command
	    		          (byte)0xE0, //device address + write bit
	    		           0x00,      //device internal register (SRF02 command register)
	    		           0x01,      //number of data bytes
	    		           0x51};     //data bytes (SRF02 command: read in cm)
		driver.write(message);
		byte[] read = driver.read(1);
		if(read[0]==0){
			throw new IOException("reading failed");
		}
		try {Thread.sleep(70);} catch (InterruptedException e) {e.printStackTrace();}
		message = new byte[]{0x55,      // usb-12c command
				            (byte)0xE1, //device address + read bit
				             0x02,      //device internal register (range bytes)
				             0x02};     //number of data bytes
		driver.write(message);
		read = driver.read(2);
		driver.close();
		
		Integer distance = ((read[0] & 0xff )<<8)| read[1]&0xff; 
		
		if(distance==0){
			return null;
		}
		return 1.0 * distance;
	}
	
	 public static void main(String [] args) {
		 DistanceSensor sensor = new DistanceSensor();
		 try {
			 while(true){
					System.out.println(sensor.readInCm()+"cm");
			 }
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	 }
}
