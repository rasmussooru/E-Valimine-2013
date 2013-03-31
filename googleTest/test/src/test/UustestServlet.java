package test;

import java.io.IOException;
import javax.servlet.http.*;

import java.io.IOException;
import java.sql.DriverManager;

import javax.servlet.http.*;
import java.io.IOException;


import javax.servlet.http.*;
import com.google.appengine.api.rdbms.AppEngineDriver;




import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.*;

import com.google.appengine.api.rdbms.AppEngineDriver;

import javax.servlet.http.*;


@SuppressWarnings("serial")
public class UustestServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		
		Connection c = null;
		try {
			c = DriverManager.getConnection("jdbc:google:rdbms://e-valimine2013:e-valimine/valimine");
			ResultSet rs = c.createStatement().executeQuery("SELECT id,eesnimi,perenimi,vanus,linn,maakond FROM valijad;");
			
			
			   resp.getWriter().println("{");
			   resp.getWriter().println("\"kandidaat\"" + ":");	
			   resp.getWriter().println("[");
			while (rs.next()){
				  int id = rs.getInt("id");
			   String eesnimi = rs.getString("eesnimi");
			   String perenimi = rs.getString("perenimi");
			   int vanus = rs.getInt("vanus");
			   String linn = rs.getString("linn");
			   String maakond = rs.getString("maakond");
			   
			   //resp.getWriter().print("{ " + "\"firstName\": " +"\"" + eesnimi + "\" , " + "\"lastName\": " + perenimi + "\"vanus\": " + vanus + "\"location\": " + linn);
			   resp.getWriter().print("{ " + "\"firstName\": " +"\"" + eesnimi + "\" , " + "\"lastName\": " +"\"" + perenimi + "\" , " + "\"location\": " +"\"" + maakond + "\"},");
			   //"\"id\":" + id + 
			   resp.getWriter().println("]");
			   resp.getWriter().println("}");
			   // lastName = rs.getString("eesnimi");
			   // resp.getWriter().println(guestName);
			    			   
			 /*   resp.getWriter().println
			    (		
			    			"{" + """kandidaat""" +
			    			"name: Zara Ali," +
			    			"age: 67," +
			    			"sex: female," +
								"}"
			    			);
			  
			    /*
			    {
			    	"kandidaat": [
			    { "id":"k1", "nimi":"John Doe" , "lastName":"Doe" , "location":"Harjumaa" , "lisainfo":"Tere minu nimi on see", "erakond":"Reformierakond", "haali": 12},
			
			    	]
			    }
						*/		
			  //  
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
