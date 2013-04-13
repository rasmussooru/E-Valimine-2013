package test;

public class Kandidaat {
	private String eesnimi;
	private String perenimi;
	private String maakond;
	private String erakond;
	private String id;
	private int votes;
	
	Kandidaat(String eesnimi, String perenimi, String maakond, String erakond, String id, int votes){
		this.eesnimi = eesnimi;
		this.perenimi = perenimi;
		this.maakond = maakond;
		this.erakond = erakond;
		this.id = id;
		this.votes = votes;
	}
	
}
