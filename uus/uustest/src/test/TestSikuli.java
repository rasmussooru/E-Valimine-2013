import org.sikuli.script.*;

import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.commons.io.FileUtils;
import org.apache.commons.logging.impl.Log4JLogger;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.*;
import org.openqa.selenium.WebDriver;
import org.python.antlr.ast.Assert;
import java.util.logging.Logger;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.FileHandler;
import java.util.logging.Handler;
import java.util.logging.LogManager;
import java.util.logging.LogRecord;
import java.util.logging.XMLFormatter;

class HTMLFormatter extends java.util.logging.Formatter {
	  public String format(LogRecord record) {
	    return ("<tr><td>" + (new Date(record.getMillis())).toString() + "</td><td>"
	        + record.getMessage() + "</td></tr>\n");
	  }

	  public String getHead(Handler h) {
	    return ("<html>\n  <body>\n" + "<Table border>\n<tr><td>Time</td><td >Log Message</td></tr>\n");
	  }

	  public String getTail(Handler h) {
	    return ("</table>\n</body>\n</html>");
	  }
	}



public class TestSikuli {

        public static void main(String[] args) throws Exception {
        	//LOGGER
        	 LogManager lm = LogManager.getLogManager();
             Logger parentLogger, childLogger;
             Logger pictureLogger;
             FileHandler xml_handler = new FileHandler("log_output.xml");
             FileHandler html_handler = new FileHandler("log_output.html");
             parentLogger = Logger.getLogger("ParentLogger");
             childLogger = Logger.getLogger("ParentLogger.ChildLogger");
             pictureLogger = Logger.getLogger("ChildLogger.PictureLogger");

             lm.addLogger(parentLogger);
             lm.addLogger(childLogger);
             lm.addLogger(pictureLogger);

             parentLogger.setLevel(Level.WARNING);
             childLogger.setLevel(Level.ALL);
             pictureLogger.setLevel(Level.ALL);
             xml_handler.setFormatter(new XMLFormatter());
             html_handler.setFormatter(new HTMLFormatter());

             parentLogger.addHandler(xml_handler);
             childLogger.addHandler(html_handler);
             pictureLogger.addHandler(html_handler);

            // childLogger.log(Level.FINE, "This is a fine log message");
             //childLogger.log(Level.SEVERE, "This is a severe log message");
            
                
        	//SIKULI
        	Screen s = new Screen();
            WebDriver ff = new FirefoxDriver();

            ff.get("https://e-valimine.appspot.com/");
            String title = ff.getTitle();
            System.out.println(title);
            Thread.sleep(5000);
            if (title == "E-valimised 2013"){
            		childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>LEHT VÕIB OLLA MAAS</FONT>");
                	pictureLogger.log(Level.SEVERE, "<img src='screenshot.png' width='200' height='200'>");
                	
                	File scrFile = ((TakesScreenshot)ff).getScreenshotAs(OutputType.FILE);
                	FileUtils.copyFile(scrFile, new File("screenshot.png"));
                	 ff.close();
					 ff.quit();
                	
                	
               }
            else{
          
                
                        try {
							if (s.exists("imgs/navmenu.png") == null){
								childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>EI LEITUD PILTI:</FONT>");
			                	pictureLogger.log(Level.SEVERE, "<img src='imgs/navmenu.png' width='200' height='200'>");
							}
							childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: green'>LEITI PILT:</FONT>");
		                	pictureLogger.log(Level.SEVERE, "<img src='imgs/navmenu.png' width='200' height='200'>");
							
							if (s.exists("imgs/kandideeri.png") == null){
								childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>EI LEITUD PILTI:</FONT>");
			                	pictureLogger.log(Level.SEVERE, "<img src='imgs/kandideeri.png' width='140' height='30'>");
							}
							else{
								s.click("imgs/kandideeri.png");
								childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: green'>VAJUTATI PILTI:</FONT>");
				                pictureLogger.log(Level.SEVERE, "<img src='imgs/kandideeri.png' width='140' height='30'>");
							}
							
							

							 if (s.exists("imgs/kandideeriinput.png") == null){
								 
							 }
							 else{
								 if (s.exists("imgs/eesnimi.png") == null){
										childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>EI LEITUD PILTI:</FONT>");
					                	pictureLogger.log(Level.SEVERE, "<img src='imgs/eesnimi.png' width='140' height='30'>");
									}
									else{
										s.click("imgs/eesnimi.png");
										s.type("Rasmus");
										childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: green'>VAJUTATI PILTI:</FONT>");
						                pictureLogger.log(Level.SEVERE, "<img src='imgs/eesnimi.png' width='140' height='30'>");
									}
								
								 
								 s.click("imgs/perekonnanimi.png");
								 
								 s.type("Sikuli");
								 Thread.sleep(1000);
								 
								 s.click("imgs/sugu.png");
								 Thread.sleep(1000);
								 s.mouseUp();
								 s.click("imgs/mees.png",3);
								 Thread.sleep(1000);
								 s.mouseUp();
								 s.click("imgs/email.png",3);
								 Thread.sleep(1000);
								 s.paste("tere@tere.ee");
								
								 
								 
								 s.click("imgs/telefon.png",3);
								 
								 s.type("12345678");
								 
								 s.click("imgs/erakond.png");
								 
								 s.click("imgs/esimene.png");
								 
								 s.click("imgs/piirkond.png");
								 
								 s.click("imgs/piirkondesimene.png");
								 
								 s.click("imgs/veebileht.png");
								 
								 s.paste("http://sikulitest.ee");
								 
								 s.click("imgs/enesetutvustus.png");
								 
								 s.paste("SIKULI TRÜKIB");
								 
								 if (s.exists("imgs/registeeri.png") == null){
									    childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>EI LEITUD PILTI:</FONT>");
					                	pictureLogger.log(Level.SEVERE, "<img src='imgs/registeeri.png' width='140' height='30'>");
								 }
								 else {
									 s.click("imgs/registeeri.png");
									 childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: green'>VAJUTATI PILTI 2</FONT>");
					                 pictureLogger.log(Level.SEVERE, "<img src='imgs/registeeri.png' width='140' height='30'>");
								 }
								 
								 //Kandidaadid
								 
								 ff.get("https://e-valimine.appspot.com/#kandidaadid");
								 
								 if (s.exists("imgs/kandidaadierakonnad.png") == null){
									    childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>EI LEITUD PILTI:</FONT>");
					                	pictureLogger.log(Level.SEVERE, "<img src='imgs/kandidaadierakonnad.png' width='140' height='30'>");
								 }
								 else {
									 s.click("imgs/kandidaadierakonnad.png");
									 childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: green'>VAJUTATI PILTI 2</FONT>");
					                 pictureLogger.log(Level.SEVERE, "<img src='imgs/kandidaadierakonnad.png' width='140' height='30'>");
					                 s.click("imgs/rohekond.png");
								 }
								 
								 if (s.exists("imgs/kandidaadimaakonnad.png") == null){
									    childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>EI LEITUD PILTI:</FONT>");
					                	pictureLogger.log(Level.SEVERE, "<img src='imgs/kandidaadimaakonnad.png' width='140' height='30'>");
								 }
								 else {
									 s.click("imgs/kandidaadimaakonnad.png");
									 childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: green'>VAJUTATI PILTI 2</FONT>");
					                 pictureLogger.log(Level.SEVERE, "<img src='imgs/kandidaadimaakonnad.png' width='140' height='30'>");
					                 s.click("imgs/harjumaa.png");
								 }
								 
								 //Statistika
								 
								 s.click("imgs/statistika.png");
								 
								 if (s.exists("imgs/kandidaadierakonnad.png") == null){
									    childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>EI LEITUD PILTI:</FONT>");
					                	pictureLogger.log(Level.SEVERE, "<img src='imgs/kandidaadierakonnad.png' width='140' height='30'>");
								 }
								 else {
									 s.click("imgs/kandidaadierakonnad.png");
									 childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: green'>VAJUTATI PILTI 2</FONT>");
					                 pictureLogger.log(Level.SEVERE, "<img src='imgs/kandidaadierakonnad.png' width='140' height='30'>");
					                 s.click("imgs/rohekond.png");
								 }
								 
								 if (s.exists("imgs/kandidaadimaakonnad.png") == null){
									    childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: red'>EI LEITUD PILTI:</FONT>");
					                	pictureLogger.log(Level.SEVERE, "<img src='imgs/kandidaadimaakonnad.png' width='140' height='30'>");
								 }
								 else {
									 s.click("imgs/kandidaadimaakonnad.png");
									 childLogger.log(Level.SEVERE, "<FONT style='BACKGROUND-COLOR: green'>VAJUTATI PILTI 2</FONT>");
					                 pictureLogger.log(Level.SEVERE, "<img src='imgs/kandidaadimaakonnad.png' width='140' height='30'>");
					                 s.click("imgs/harjumaa.png");
								 }
								 
								 
								 
								 
							  	 ff.close();
								 ff.quit();
							 }
		                    
						} catch (FindFailed e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
            }
                        xml_handler.close();
                        html_handler.close();
                        
                }
        
        
       
         
        }

