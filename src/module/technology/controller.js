import * as domEl from "./dom-elements";

domEl.numberList.forEach((numb) => {
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
    });
  });
});
