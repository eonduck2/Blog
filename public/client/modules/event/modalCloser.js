/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 * 
 * CHECKLIST: 24.06.04
 * 
 * NOTE: 1. 모달 창 X 버튼 클릭 시, 모달 닫기
  @param NoParam
*/
export default () => {
  const xIcon = document.getElementById(`x-icon`);
  const $modal_container = document.getElementById(`modal-container`);

  xIcon.onclick = () => {
    $modal_container.remove();
  };
};
