$(document).ready(function () {
  $('.bars').on('click',function () {
    $('.menuu').toggleClass('prikaz'); // hamburger meni, ready je kad se ucita strana tek onda se izvrasava kod unutar funkcije, uzima element koji ima klasu koja se zove bars i dodaje mu event klik (da se desi nesto kada klikne) i kao parametar prosedjuje drugu funkciju koja uzima elemenat sa imenom klase meni i na njega toggle(kad klikne otvara i kada opet klikne zatvara) klasu prikaz. 
  })
 
   $('#uvecaj').hover(function(){
	  $(this).animate({
      width: '300px',
      height: '250px'       // uzima elemenat koji ima id uvecaj i na njega poziva dogadjaju funkciju hover koja ima dva parametra prvi parametar se izvrsava kada se izvrsi hoverovanje a drugi kada se skine za prvi parametar dobija sirinu i visinu 300 i 250 za vreme od 500ms a drugi parametar je kad se skine i dobiaj sirinu 100 i visinu 75 za vreme od 500ms.
    } ,500);}, function() 
	{
		    $(this).animate({
      width: '100px',
      height: '75px'
    },500);
	})
})

