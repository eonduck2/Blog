import htmlData from "../datas/rootHtmlData.js";
import clickForFormSubmit from "../event/clickForFormSubmit.js";
import elDynamicControl from "../allAboutElement/elementDynamicControl.js";
import objArrForStyle from "../styles/objArrForStyle.js";
import elStyles from "../styles/eleStyleProperties.js";
import elPrepend from "../allAboutElement/prependElement.js";
import elCreate from "../allAboutElement/createElement.js";
import modalClose from "./modalCloser.js";
import postingButtonHover from "./submitButtonHover.js";

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
  const createModalContainer = elCreate({
    element: `div`,
    className: "",
    id: `modal-container`,
  });
  // const createdModal = elCreate({ element: `div`, className: "", id: `modal` });
  const $root = document.getElementById(`root`);
  $postingBtn.onclick = () => {
    elPrepend($root, createModalContainer);
    const $modal_container = document.getElementById(`modal-container`);
    $modal_container.innerHTML = htmlData.rootHtml.modalData;
    objArrForStyle(elStyles, (elementArr) => {
      elementArr.forEach((elementId) => {
        elDynamicControl(
          document.getElementById(elementId),
          elStyles[elementId]
        );
      });
    });
    modalClose();
    clickForFormSubmit();
  };
};
