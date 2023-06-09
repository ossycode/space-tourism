import * as domEl from "./dom-elements";
import { changeTabFocus } from "../shared";

let slideIndex = 0;
let slides = domEl.slidePanel;

domEl.tablist.addEventListener("keydown", () =>
  changeTabFocus(event, domEl.dots)
);

domEl.dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const tagetDot = e.target;
    slideIndex = tagetDot.dataset.id;

    domEl.tablist
      .querySelector('[aria-selected="true"]')
      .setAttribute("aria-selected", false);

    slides.forEach((slide) => {
      slide.setAttribute("hidden", true);
      if (slide.dataset.id === tagetDot.dataset.id) {
        slide.removeAttribute("hidden");
        tagetDot.setAttribute("aria-selected", true);
      }
    });

    domEl.slideImage.forEach((image) => {
      image.setAttribute("hidden", true);
      if (image.dataset.id === tagetDot.dataset.id) {
        image.removeAttribute("hidden");
        // tagetDot.setAttribute("aria-selected", true);
      }
    });
  });
});

// showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].setAttribute("hidden", true);
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].removeAttribute("hidden");

  domEl.dots.forEach((dot) => {
    dot.setAttribute("aria-selected", false);

    if (slides[slideIndex - 1].dataset.id === dot.dataset.id) {
      dot.setAttribute("aria-selected", true);
    }
  });
  setTimeout(showSlides, 4000);
}
