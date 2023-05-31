import * as domEl from "./dom-elements";

domEl.tabList.addEventListener("keydown", changeTabFocus);

let index = 0;
function changeTabFocus(e) {
  const left_arrow = 37;
  //   const up_arrow = 38;
  const right_arrow = 39;
  //   const down_arrow = 40;

  const pressedKey = e.keyCode;

  // change the tabindex of the current tab to -1
  if (pressedKey === left_arrow || pressedKey === right_arrow) {
    domEl.tabs[index].setAttribute("tabindex", -1);
  }
  // if the right key is pushed, moved to the next tab on the right
  if (pressedKey === right_arrow) {
    index++;
    if (index >= domEl.tabs.length) {
      index = 0;
    }
  }
  if (pressedKey === left_arrow) {
    index--;

    if (index < 0) {
      index = domEl.tabs.length - 1;
    }
  }

  domEl.tabs[index].setAttribute("tabindex", 0);
  domEl.tabs[index].focus();
}

const changeTab = function (e) {
  e.preventDefault();
  const tab = e.target;

  const targetTapPenel = tab.getAttribute("aria-controls");

  const container = domEl.tabContainer.querySelector([`#${targetTapPenel}`]);

  //   .id === `${targetTapPenel}`;
  domEl.tabPanel.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });

  domEl.tabLink.forEach((link) => {
    link.classList.remove("selected");
    link.setAttribute("aria-selected", false);
  });

  container.removeAttribute("hidden");
  tab.setAttribute("aria-selected", true);
  tab.classList.add("selected");

  domEl.destinationImage.forEach((destination) => {
    destination.classList.remove("current");

    if (destination.dataset.id === targetTapPenel) {
      destination.classList.add("current");
    }
  });
};

// domEl.tabs.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     let selected = document.getElementsByClassName("");
//     console.log(selected);
//     if (selected.length > 0) {
//       selected[0].className = selected[0].className.replace("selected", "");
//     }
//     this.className += " selected";

//     console.log(e.target.value);
//   });
// });

domEl.tabs.forEach((tab) => {
  tab.addEventListener("click", changeTab);
});
