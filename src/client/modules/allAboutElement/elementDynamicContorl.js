// !----------- don't be use this module ------------
/** 
 * * 특정 element를 인자로 받아 클래스를
  @param element 
*/
export default function (element) {
  if (element.className == `header-menu-li`) {
    headerLi = {
      // width: `100%`,
      // height: `100%`,
      // backgroundColor: `#D9D9D9`,
    };

    const stylesObjectArr = Object.entries(styles);

    /**
     * * 아래 반복문은, 다음 코드와 같다.
     * * element.style.width = `100%`;
     * * element.style.height = `100%`;
     * * element.style.backgroundColor = `#D9D9D9`;
     */

    for (let i = 0; i < stylesObjectArr.length; i++) {
      element.style[stylesObjectArr[i][0]] = stylesObjectArr[i][1];
    }

    return;
  }
}
// !----------- don't be use this module ------------
