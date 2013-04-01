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
import java.sql.*;

import com.google.appengine.api.rdbms.AppEngineDriver;

import javax.servlet.http.*;

import org.json.JSONObject;


@SuppressWarnings("serial")
public class UustestServlet extends HttpServlet {
public void doGet(HttpServletRequest req, HttpServletResponse resp)
throws IOException {
resp.setContentType("application/json");

Connection c = null;
try {
c = DriverManager.getConnection("jdbc:google:rdbms://e-valimine2013:e-valimine/valimine");
ResultSet rs = c.createStatement().executeQuery("SELECT id,eesnimi,perenimi,vanus,linn,maakond FROM valijad WHERE eesnimi = 'Rasmus';");


//resp.getWriter().println("{");
//resp.getWriter().println("\"kandidaat\"" + ":");	
//resp.getWriter().println("[");
while (rs.next()){
int id = rs.getInt("id");
String eesnimi = rs.getString("eesnimi");
String perenimi = rs.getString("perenimi");
int vanus = rs.getInt("vanus");
String linn = rs.getString("linn");
String maakond = rs.getString("maakond");
JSONObject kandidaat=new JSONObject();
kandidaat.put("firstName", eesnimi);
kandidaat.put("lastName", perenimi);
kandidaat.put("location", maakond);
resp.getWriter().print(kandidaat);

//resp.getWriter().print("{ " + "\"firstName\": " +"\"" + eesnimi + "\" , " + "\"lastName\": " + perenimi + "\"vanus\": " + vanus + "\"location\": " + linn);
//resp.getWriter().print("{ " + "\"firstName\": " +"\"" + eesnimi + "\" , " + "\"lastName\": " +"\"" + perenimi + "\" , " + "\"location\": " +"\"" + maakond + "\"},");
//"\"id\":" + id +
//resp.getWriter().println("]");
//resp.getWriter().println("}");
// lastName = rs.getString("eesnimi");
// resp.getWriter().println(guestName);

/* resp.getWriter().println
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