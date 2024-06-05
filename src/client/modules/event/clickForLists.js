export default () => {
  document.querySelectorAll(`li`).forEach((element) => {
    element.onclick = () => {
      console.log(1);
    };
  });
};
