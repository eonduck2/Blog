export default () => {
  const xIcon = document.getElementById(`x-icon`);
  const $modal_container = document.getElementById(`modal-container`);

  xIcon.onclick = () => {
    $modal_container.remove();
  };
};
