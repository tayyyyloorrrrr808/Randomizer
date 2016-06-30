var Artists =  
["Justin Bieber",
 "Kanye West",
  "Beyonce",
   "Rihanna",
   "Selena Gomez",
    "Ariana Grande",
     "PartyNextDoor", "Chris Brown", 
     "Demi Lovato", "Fetty Wap", 
     "Tove Lo",
     "Charlie Puth", 
     "Twenty One pilots",
     "Meghan Trainor",
     "Future",
     "Kent Jones",
     "Ruth B",
     "Daya",
     "G-Eazy",
     "Alessia Cara",
     "Ty Dolla $ign",
     "DJ Khaled",
     "Travi$ Scott",
     "Tory Lanez",
     "Post Malone",
     "Jason Derulo",
     "Kid Ink",
     "R. City"];

function pickArtists(){
	// Sets avariablle called toppingNumber that will have a random Whole Number
	//Based on the length of the Artists array
	var artistsNumber = Math.floor(Math.random()*Artists.length);
	// Sets avariablle called toppingNumber2 that will have a random Whole Number
	//Based on the length of the Artists array
	var artistsNumber2 = Math.floor(Math.random()*Artists.length);
	document.getElementById('mixArtists').innerHTML = "<h1>"+Artists[artistsNumber]+" And "+Artists[artistsNumber2]+"</h1>";
	
}
