/** 
 * STATUS[O]: 현재 상태
 * 
 * CHECKLIST: 24.05.28
 * NOTE: index.html 최초 응답 시, <div id ="root"> 없으면 추가
  @param NoParam
*/
export default () => {
  let root = document.getElementById(`root`);

  if (root != null) {
    return;
  } else if (root == null) {
    root = createElement(elObject.divs.root);
    root.id = `root`;
    document.querySelector(`body`).appendChild(root);
    return;
  }
};
