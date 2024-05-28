/** 
 * * 특정 element와 Key - Value로 스타일 값이 짝 지어진 객체를 받아 동적 스타일링
  @param element 
*/
export default (element, styleObj) => {
  for (let key in styleObj) {
    element.style[key] = styleObj[key];
  }
};
