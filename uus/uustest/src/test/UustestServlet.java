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
			String values = "'k' + k.id,k.eesnimi,k.perenimi,k.erakond,";
			values = values + "k.maakond,COUNT(v.kandidaat) AS votes";
			String tableJoin = "kandidaadid k LEFT JOIN haaled v ON k.id = v.kandidaat";
			String query = "SELECT " + values + " FROM " + tableJoin + " GROUP BY k.id";
			ResultSet rs = c.createStatement().executeQuery(query);
			
			Collection<Kandidaat> kandidaadid = new ArrayList<Kandidaat>();
			while (rs.next()){
				  String eesnimi = rs.getString("eesnimi");
				  String perenimi = rs.getString("perenimi");
				  String maakond = rs.getString("maakond");
				  String erakond = rs.getString("erakond");
				  String id = rs.getString(1);
				  int votes = rs.getInt("votes");
				  Kandidaat k = new Kandidaat(eesnimi, perenimi, maakond, erakond, id, votes);
				  kandidaadid.add(k);
			}
			resp.getWriter().print(new Gson().toJson(kandidaadid));
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
