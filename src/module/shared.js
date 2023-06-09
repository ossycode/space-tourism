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

let index = 0;

export function changeTabFocus(e, tabs) {
  const left_arrow = 37;
  const right_arrow = 39;
  const pressedKey = e.keyCode;
  // change the tabindex of the current tab to -1
  if (pressedKey === left_arrow || pressedKey === right_arrow) {
    tabs[index].setAttribute("tabindex", -1);
  }
  // if the right key is pushed, moved to the next tab on the right
  if (pressedKey === right_arrow) {
    index++;
    if (index >= tabs.length) {
      index = 0;
    }
  }
  if (pressedKey === left_arrow) {
    index--;

    if (index < 0) {
      index = tabs.length - 1;
    }
  }
  tabs[index].setAttribute("tabindex", 0);
  tabs[index].focus();
}
