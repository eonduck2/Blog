import elementDynamicControl from "../allAboutElement/elementDynamicControl.js";
import eleStyleProperties from "../styles/eleStyleProperties.js";

/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 * 
 * CHECKLIST: 24.06.02
 * 
 * NOTE: 1. 버튼 Hover 스타일링 추가
  @param NoParam
*/

export default () => {
  const writingBtn = document.getElementById(`posting-button`);

  const writingBtnStyles = {
    backgroundColor: `rgb(59, 59, 59)`,
    color: `rgb(201, 201, 201)`,
  };

  writingBtn.onmouseover = () => {
    elementDynamicControl(writingBtn, writingBtnStyles);
  };

  writingBtn.onmouseout = () => {
    elementDynamicControl(writingBtn, eleStyleProperties["posting-button"]);
  };
};
