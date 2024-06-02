import elCreate from "./modules/allAboutElement/createElement.js";
import elAppend from "./modules/allAboutElement/appendElement.js";
import elObject from "./modules/allAboutElement/elementObject.js";
import elDynamicControl from "./modules/allAboutElement/elementDynamicControl.js";
import modalForPosting from "./modules/event/clickForPosting.js";
import indexHtmlTemplate from "./modules/template/indexHtmlTemplate.js";
import datas from "./modules/datas/rootHtmlData.js";
import elStyles from "./modules/styles/eleStyleProperties.js";

/**
 *  IMPORTANT
 *
 *  STATUS[O] - 현재 상태
 *
 *  CHECKLIST: 24.05.29 브라우저 최초 접속 동작 확인
 *
 *  NOTE: 1. 기능 추가 시, 가장 먼저 봐야
 *
 *  NOTE: 2. 기능 하나 추가할 때마다 꼭 단위 테스트
 *
 *  TODO: 기능 추가 시 테스트 && 더블 체크
 */
window.onload = () => {
  indexHtmlTemplate();
  document.getElementById(`root`).innerHTML = datas.rootHtml.rootHtmlData;
  indexFunc();
};

const indexFunc = () => {
  modalForPosting();
  objArrForStyle(() => {});
};
