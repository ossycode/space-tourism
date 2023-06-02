import * as domEl from "./dom-elements";

let slideIndex = 0;
let slides = domEl.slidePanel;

domEl.dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const tagetDot = e.target;
    slideIndex = tagetDot.dataset.id;
    slides.forEach((slide) => {
      slide.style.display = "none";
      if (slide.dataset.id === tagetDot.dataset.id) {
        let show = document.getElementsByClassName("show");
        if (show.length > 0) {
          show[0].className = show[0].className.replace("show", "");
        }
        tagetDot.className += " show";
        slide.style.display = "flex";
      }
    });
  });
});

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";

  domEl.dots.forEach((dot) => {
    dot.classList.remove("show");

    if (slides[slideIndex - 1].dataset.id === dot.dataset.id) {
      dot.classList.add("show");
    }
  });
  setTimeout(showSlides, 4000);
}
