import elStyles from "../allAboutElement/elementDynamicControl.js";

/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 * 
 * CHECKLIST: 24.05.29/02:05 AM import 시, 서빙 관련 문제 확인
 * 
 * NOTE: 모달(글 쓰기) 버튼 클릭 시, 모달 창 팝업
  @param NoParam
*/

export default () => {
  const $postingBtn = document.querySelector(`#root button:first-child`);
  const $modal = document.getElementById(`modal`);

  const modalStylingObj = {
    display: `flex`,
  };

  $postingBtn.onclick = () => {
    elStyles($modal, modalStylingObj);
  };
};
