package common;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.servlet.Context;
import org.mortbay.jetty.servlet.DefaultServlet;
import org.mortbay.jetty.servlet.ServletHolder;

import sonar.SonarDistanceDetector;
import webcam.WebcamDistanceDetector;



public class DistanceServer {

	public static void main(String[] args) throws Exception {
		Server server = new Server(8080);
		Context root = new Context(server,"/",Context.SESSIONS);
		root.setResourceBase("./files");
		
		WebcamDistanceDetector webcam = new WebcamDistanceDetector();
		SonarDistanceDetector sonar = new SonarDistanceDetector();
		sonar.setTimeBetweenMeasures(100);
		IDistanceDetector combined = new CombinedWebcamSonarDistanceDetector(sonar,webcam);

		root.addServlet(new ServletHolder(new DefaultServlet()), "/");   
		//root.addServlet(new ServletHolder(new DistanceServlet(sonar)), "/paysage/distance");
		root.addServlet(new ServletHolder(new DistanceServlet(sonar)), "/sonar");
		root.addServlet(new ServletHolder(new DistanceServlet(webcam)), "/webcam");
		root.addServlet(new ServletHolder(new DistanceServlet(combined)), "/webcam_sonar");
		
		server.start();
	}

}
