import * as domEl from "./dom-elemets";

// Control the Mobile Navigation

domEl.mobileNavToggle.addEventListener("click", (e) => {
  domEl.nav.classList.toggle("show");

  if (domEl.nav.classList.contains("show")) {
    domEl.nav.style.transform = "translateX(0)";
    domEl.mobileNavToggle.style.backgroundImage =
      "url('../../dist/assets/shared/icon-close.svg')";
  } else {
    domEl.nav.style.transform = "translateX(100%)";
    domEl.mobileNavToggle.style.backgroundImage =
      "url('../../dist/assets/shared/icon-hamburger.svg')";
  }
});
