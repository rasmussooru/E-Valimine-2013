package test;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class KandideeriServlet extends HttpServlet{
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Connection c = null;
		try {
			c = DriverManager.getConnection("jdbc:google:rdbms://e-valimine2013:e-valimine/valimine");
			
			String erakond = req.getParameter("erakond");
			String eesnimi = req.getParameter("name");
			String perenimi = req.getParameter("family");
			String maakond = req.getParameter("piirkond");

			String values = "'" + erakond + "','" + eesnimi + "','" + perenimi + "','" + maakond + "'";
			String query = "INSERT INTO kandidaadid (erakond,eesnimi,perenimi,maakond) VALUES(" + values + ")";
			c.createStatement().executeQuery(query);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}

}
