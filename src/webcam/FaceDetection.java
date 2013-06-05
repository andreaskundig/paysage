package webcam;
/**
 * (./) FaceDetection.java, 03/05/08
 * (by) cousot stephane @ http://www.ubaa.net/
 * (cc) some right reserved
 *
 * Sample program for "OpenCV" project.
 * Use ESC key to close the program properly.
 *
 * This sample is released under a Creative Commons Attribution 3.0 License
 * ‹ http://creativecommons.org/licenses/by/3.0/ ›
 */
 
 

import java.awt.*;
import java.awt.event.*;
import java.awt.image.MemoryImageSource;

import javax.swing.JFrame;

import hypermedia.video.OpenCV;



 
public class FaceDetection extends JFrame  implements Runnable {
	
	
	// program execution frame rate (millisecond)
	final int FRAME_RATE  = 1000/30;
	
	
	OpenCV cv = null;	// OpenCV Object
	Thread t  = null;	// the sample thread
	
	
	
	// the input video stream image
	Image frame	= null;
	// list of all face detected area
	Rectangle[] squares = new Rectangle[0];
	
	
	
	/**
	 * Setup Frame and Object(s).
	 */
	FaceDetection() {
		
		super( "Face Detection Sample" );
				
		// start running program
		t = new Thread( this );
		t.start();
	}
	
	
	/**
	 * Draw video frame and each detected faces area.
	 */
	public void paint( Graphics g ) {
		
		// draw image
		g.drawImage( frame, 0, 0, null );
		
		// draw squares
		g.setColor( Color.RED );
		for( Rectangle rect : squares )
			g.drawRect( rect.x, rect.y, rect.width, rect.height );
	}
	
	
	
	
	/**
	 * Execute this sample.
	 */
	public void run() {
		// OpenCV setup
		cv = new OpenCV();
//		cv.capture( 320, 240 );
		cv.capture( 960, 720 );
		cv.cascade( OpenCV.CASCADE_FRONTALFACE_ALT );
		
		
		// frame setup
		this.setBounds( 100, 100, cv.width, cv.height );
		this.setBackground( Color.BLACK );
		this.setVisible( true );
		this.addKeyListener(
			new KeyAdapter() {
				public void keyReleased( KeyEvent e ) { 
					if ( e.getKeyCode()==KeyEvent.VK_ESCAPE ) { // ESC : release OpenCV resources 
						cv.dispose();
						System.exit(0);
					}
				}
			}
		);
		while( t!=null && cv!=null ) {
			try {
				Thread.sleep( FRAME_RATE );
				
				// grab image from video stream
				cv.read();
				
				// create a new image from cv pixels data
				MemoryImageSource mis = new MemoryImageSource( cv.width, cv.height, cv.pixels(), 0, cv.width );
				frame = createImage( mis );
				
				// detect faces
				squares = cv.detect( 1.2f, 2, OpenCV.HAAR_DO_CANNY_PRUNING, 20, 20 );
				
				// of course, repaint
				repaint();
			}
			catch( InterruptedException e ) {;}
		}
	}
	
	
	
	/**
	 * Main method.
	 * @param String[]	a list of user's arguments passed from the console to this program
	 */
	public static void main( String[] args ) {
		System.out.println( "\nOpenCV face detection sample\n" );
		new FaceDetection();
	} 

}