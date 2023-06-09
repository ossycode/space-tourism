import * as domEl from "./dom-elements";
import { changeTabFocus } from "../shared";

domEl.tablist.addEventListener("keydown", () =>
  changeTabFocus(event, domEl.tabs)
);
domEl.tabs.forEach((numb) => {
  numb.addEventListener("click", (e) => {
    const targetNumber = e.target;
    domEl.techInfo.forEach((info) => {
      info.classList.remove("current");
      if (targetNumber.dataset.id === info.dataset.id) {
        info.classList.add("current");

        let show = document.getElementsByClassName("activeBtn");
        if (show.length > 0) {
          show[0].className = show[0].className.replace("activeBtn", "");
        }
        targetNumber.className += " activeBtn";
      }
      domEl.techImage.forEach((image) => {
        image.setAttribute("hidden", true);
        if (image.dataset.id === targetNumber.dataset.id) {
          image.removeAttribute("hidden");
        }
      });
    });
  });
});
