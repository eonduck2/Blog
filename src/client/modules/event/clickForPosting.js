import elStyles from "../allAboutElement/elementDynamicControl.js";

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
  const $postingBtn = document.querySelector(`#root button:first-child`);
  const $modal = document.getElementById(`modal`);
  $postingBtn.onclick = () => {
    modalStyling = {
      display: `flex`,
    };

    elStyles($postingBtn, modalStyling);
  };
};
