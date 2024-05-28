import elCreate from "./modules/allAboutElement/createElement.js";
import elAppend from "./modules/allAboutElement/appendElement.js";
import elObject from "./modules/allAboutElement/elementObject.js";
import elDynamicControl from "./modules/allAboutElement/elementDynamicControl.js";
import modalForPosting from "./modules/event/clickForPosting.js";
import indexHtmlTemplate from "./modules/template/indexHtmlTemplate.js";
import datas from "./modules/datas/rootHtmlData.js";
import elStyles from "./modules/styles/eleStyleProperties.js";

window.onload = () => {
  indexHtmlTemplate();
  document.getElementById(`root`).innerHTML = datas.html.rootHtmlData;
  elDynamicControl(document.getElementById(`modal`), elStyles.modal);
  indexFunc();
};

const indexFunc = () => {
  const button = document.querySelector(`#root button:first-child`);
  modalForPosting(button);
};
