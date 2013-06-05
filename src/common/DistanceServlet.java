package common;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public class DistanceServlet extends HttpServlet {
	private IDistanceDetector detector;
	
	public DistanceServlet(IDistanceDetector detector){
		this.detector = detector;
	}

	@Override
	public void init() throws ServletException {
		detector.start();
	}

	@Override
	protected void doGet(HttpServletRequest arg0, HttpServletResponse arg1) throws ServletException, IOException {
		doPost(arg0, arg1);
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		Double distance = detector.getDistance();
		//System.out.print(distance+" ");
		response.setContentType("text/xml");
		response.getWriter().println("<distance>"+distance+"</distance>");
	}

}
