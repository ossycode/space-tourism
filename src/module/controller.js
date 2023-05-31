import * as domEl from "./dom-elemets";

domEl.navItems.forEach((element) => {
  element.addEventListener("click", function (e) {
    let active = document.getElementsByClassName("active");
    if (active.length > 0) {
      active[0].className = active[0].className.replace("active", "");
    }
    this.className += " active";
  });
});

// Destination Tab Control
