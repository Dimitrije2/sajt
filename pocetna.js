var slideIndex = 0; // pravi varijablu i dodeljuje joj vrednost 0
showSlides(); // poziva funkciju show slides

function showSlides() {            // pravi se funkcija 
    var i; // pravi novu varijablu i
    var slides = document.getElementsByClassName("mySlides"); // uzima sve elemente koji imaju klasu mySLides i smesta u varijablu slides
    for (i = 0; i < slides.length; i++) {   // petlja prolazi kroz sve elemente varijable slides 
       slides[i].style.display = "none";   // svakom elementu dodeljuje displey none to znaci da se ne vide
    }
    slideIndex++;   // sabira index slide sa 1
    if (slideIndex> slides.length) {slideIndex = 1} // ako je slajd index veci od duzine elemenata dodeljuje vrednost 1 u slideIndex.
    slides[slideIndex-1].style.display = "block"; // varijabli sldies se pristupa preko areja tako sto se u vrednost areja upisuje broj koji je jednak slide inde -1 i dodeljuje mu display block.
    setTimeout(showSlides, 3000); // funkcija showSlides se automatski poziva na svake 3 sekunde.
}