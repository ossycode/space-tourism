import * as domEl from "./dom-elements";
import { changeTabFocus } from "../shared";

const allTabs = domEl.tabs;

domEl.tabList.addEventListener("keydown", () => changeTabFocus(event, allTabs));

const changeTab = function (e) {
  e.preventDefault();
  const tab = e.target;
  const targetTapPenel = tab.getAttribute("aria-controls");
  const tabContainer = tab.parentNode;
  const mainContainer = tabContainer.parentNode;

  tabContainer
    .querySelector('[aria-selected ="true"]')
    .setAttribute("aria-selected", false);

  const targetPanel = mainContainer.querySelector([`#${targetTapPenel}`]);

  domEl.tabPanel.forEach((panel) => {
    panel.setAttribute("hidden", true);
    targetPanel.removeAttribute("hidden");
    tab.setAttribute("aria-selected", true);
  });
  domEl.destinationImages.forEach((image) => {
    image.setAttribute("hidden", true);
    if (image.dataset.element === targetTapPenel) {
      image.removeAttribute("hidden");
    }
  });
};

domEl.tabs.forEach((tab) => {
  tab.addEventListener("click", changeTab);
});

// function hideContent(nodeListData) {
//   nodeListData.forEach((item) => item.setAttribute("hidden", true));
// }

// function showcontent(parent) {

// }
