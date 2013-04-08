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
import java.lang.reflect.Type;
import java.sql.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.google.appengine.api.rdbms.AppEngineDriver;
import com.google.gson.Gson;

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
			
			Collection<Kandidaat> kandidaadid = new ArrayList<Kandidaat>();
			while (rs.next()){
				  String eesnimi = rs.getString("eesnimi");
				  String perenimi = rs.getString("perenimi");
				  String maakond = rs.getString("maakond");
				  Kandidaat k = new Kandidaat(eesnimi, perenimi, maakond);
				  kandidaadid.add(k);
				  
			}
			resp.getWriter().print(new Gson().toJson(kandidaadid));
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
