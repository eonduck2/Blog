import elCreate from "./modules/allAboutElement/createElement.js";
import elAppend from "./modules/allAboutElement/appendElement.js";
import elObject from "./modules/allAboutElement/elementObject.js";
import modalForPosting from "./modules/clickForPosting.js";
import indexHtmlTemplate from "./modules/template/indexHtmlTemplate.js";
import datas from "./modules/datas/rootHtmlData.js";

window.onload = () => {
  indexHtmlTemplate();
  document.getElementById(`root`).innerHTML = datas.html.rootHtmlData;
  indexFunc();
};

const indexFunc = () => {
  const button = document.querySelector(`#root button:first-child`);
  modalForPosting(button);
};
