let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll("#slideshow-container img");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
    }
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}