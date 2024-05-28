/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 
 * CHECKLIST: 24.05.29

 * NOTE: 1. 엘리먼트 생성해주는 함수, class, id를 통해 식별자를 부여할 수 있다.
 * NOTE: 2. 객체로 전달 받을 시, className과 ID까지만 property로서 read할 수 있다.
 * @param element 요소
 * @param className 요소의 class
 * @param id 요소의 id
*/

export default (element, className, id) => {
  if (typeof element !== `object`) {
    const cElement = document.createElement(element);
    if (className != "") {
      cElement.className = className;
    }
    if (id != "") {
      cElement.id = id;
    }
    return cElement;
  }

  if (typeof element === `object`) {
    const cElement = document.createElement(element.element);
    if (element.className != "") {
      cElement.className = element.className;
    }

    if (element.id != "") {
      cElement.id = element.id;
    }
    return cElement;
  }
};
