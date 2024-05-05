function openForm()  {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var slideIdex = 1;
showSlides(slideIdex);

function plusSlides(n) {
    showSlides(slideIdex += n);
}

function currentSlide(n) {
    showSlides(slideIdex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIdex = 1};
    if (n < 1) {slideIdex = slide.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIdex - 1].style.display = "block";
    dots[slideIdex - 1].className += " active";
}

document.addEventListener("click", function(event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }  
}, false )