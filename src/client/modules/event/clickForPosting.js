import elStyles from "../allAboutElement/elementDynamicControl";

export default () => {
  const $postingBtn = document.querySelector(`#root button:first-child`);
  const $modal = document.getElementById(`modal`);
  $postingBtn.onclick = () => {
    modalStyling = {
      display: `flex`,
    };
    elStyles();
  };
};
