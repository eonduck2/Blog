/**
 * @param noParam
 * * HTML 내에 <div id="root"> 존재 시, HTML 코드 추가, 존재하지 않을 시 생성하고 추가
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
