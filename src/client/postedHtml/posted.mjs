import postedHtmlTemplate from "./modules/datas/postedHtmlData.js";
/**
 * IMPORTANT
 *
 * STATUS[O] - 현재 상태
 *
 * CHECKLIST: 24.05.31/09:20 AM 구현
 *
 * NOTE: 1. posted.html이 loading될 때, 템플릿을 이용해서 HTML Mark-Up
 */

window.onload = () => {
  document.getElementById(`root`).innerHTML =
    postedHtmlTemplate.postedHtml.rootHtmlData;
};
