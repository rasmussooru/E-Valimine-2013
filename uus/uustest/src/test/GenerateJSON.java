package test;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
 

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
 
public class GenerateJSON {
 
 public static void main(String[] args) {
 
 
 
  Object orderDetailList;
orderHeader.setOrderDetailList(orderDetailList);
 
  Gson gson = new GsonBuilder().setPrettyPrinting().create();
  //you don't need the GsonBuilder if you are just sending the
  //data to another system or AJAX response, in that case just use
  //Gson gson = new Gson();
   
  // convert java object to JSON format, so easy
  String jsonString = gson.toJson(orderHeader);
   
  //write the JSON data to file
  BufferedWriter bufferedWriter = null;
  try {
 
   File file = new File("data/myFile.json");
   if(!file.exists()){
      file.createNewFile();
         }
  
         FileWriter fileWriter = new FileWriter(file);
         bufferedWriter = new BufferedWriter(fileWriter);
         bufferedWriter.write(jsonString);
         
     
  } catch (IOException e) {
   e.printStackTrace();
  } finally {
   try {
    if (bufferedWriter != null){
     bufferedWriter.close();
    }
   } catch (IOException ex) {
    ex.printStackTrace();
   }
  }
 
 }
 
}