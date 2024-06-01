import htmlData from "../datas/rootHtmlData.js";
import clickForFormSubmit from "../event/clickForFormSubmit.js";
import elDynamicControl from "../allAboutElement/elementDynamicControl.js";
import elStyles from "../styles/eleStyleProperties.js";

/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 * 
 * CHECKLIST: 24.05.28
 * 
 * NOTE: 모달(글 쓰기) 버튼 클릭 시, 모달 창 팝업
  @param NoParam
*/

export default () => {
  const $postingBtn = document.getElementById(`posting-button`);
  const $modal = document.getElementById(`modal`);
  $postingBtn.onclick = () => {
    elDynamicControl($modal, elStyles.modal);
    $modal.innerHTML = htmlData.rootHtml.modalData;
    clickForFormSubmit();
  };
};
