import postedHtmlTemplate from "./modules/datas/postedHtmlData.js";
window.onload = () => {
  document.getElementById(`root`).innerHTML =
    postedHtmlTemplate.postedHtml.rootHtmlData;
};
