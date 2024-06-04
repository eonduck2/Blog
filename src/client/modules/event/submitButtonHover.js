import elementDynamicControl from "../allAboutElement/elementDynamicControl.js";
import eleStyleProperties from "../styles/eleStyleProperties.js";
/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 * 
 * CHECKLIST: 24.06.04
 * 
 * NOTE: 1. 모달의 "작성하기" 버튼에 Hover 스타일링 추가
  @param NoParam
*/
export default () => {
  const $submitBtn = document.getElementById(`submit-btn`);
  console.log($submitBtn);

  const submitHoverBtnStyles = {
    backgroundColor: `rgb(207, 207, 207)`,
    color: `rgb(102, 102, 102)`,
  };

  $submitBtn.onmouseover = () => {
    elementDynamicControl($submitBtn, submitHoverBtnStyles);
  };

  $submitBtn.onmouseout = () => {
    elementDynamicControl($submitBtn, eleStyleProperties["submit-btn"]);
  };
};
