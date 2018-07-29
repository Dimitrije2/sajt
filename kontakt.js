function fun(){       // pravimo klasu fun koja se poziva na dugme u html.
	var ime = document.querySelector("input[name='ime']").value; // varijabla ime koju uzimamo preko qs i uzima vrednost tog elemenata.
	var prezime = document.querySelector("input[name='prezime']").value; // -II-
	var email = document.querySelector("input[name='email']").value;
	var poruka = document.querySelector("textarea[name='poruka']").value;
	
	try{                     // try catch koji proverava input polje mail i proverava da li ima @ ako ga nema pravi gresku i izbacuje je

		if(email.indexOf('@') === -1) throw 'Nije validan email'; 

	}catch(err){
		alert(err);
		return false;
	}
	
	alert("Vase ime je: "+ime+","+"Vase prezime: " + prezime+","+"Vas mejl: " + email+","+"Vasa poruka je: "+poruka); // kada si klikne na dugme ako nema greske ispisuje ovo u alertu
}

function initMap() {
        var uluru = {lat: 41.4960465, lng: -81.6900627}; // pravi varijablu koja sadrzi koordinte mesta na mapi
        var map = new google.maps.Map(document.getElementById('map'), {      // pravi objekat koji sadrzi dva parametra i prvi parametar uzima elemenat koji ima id map a drugi je objekat koji ima svojstvo zoom i center
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({ // pravi objekat koji sadrzi kao argument objekat koji ima svojstva position i map
          position: uluru,
          map: map
        });
      }
	  
	  var informacije = {   //objekat koji sadrzi 3 svojstva adresa, radno vreme i broj telefona.
	adresa: "Tratira Titra",
	radno_vreme: "9-20h, all day",
	broj_telefona: "2358458965"
};
document.getElementById("informacije").innerHTML = " Adresa kosarkaskog sopa: " +informacije.adresa + "<br>"+ " Radno vreme: " + informacije.radno_vreme + "<br>"+" Strani telefon: " +informacije.broj_telefona; // pomocu ovog se pristupa objektu i ispisuje njegove vrednosti.