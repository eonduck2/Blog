// import elStyles from "../allAboutElement/elementDynamicControl";

/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[X] - 현재 상태
 * 
 * FIXME
 * 
 * CHECKLIST: 24.05.29/02:05 AM import 시, 서빙 관련 문제 확인
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

    // elStyles($postingBtn, modalStyling);
  };
};
