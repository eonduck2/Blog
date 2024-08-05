/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 
 * CHECKLIST: 24.05.28

 * NOTE: 특정 element와 Key - Value로 스타일 값이 짝 지어진 객체를 받아 동적 스타일링
  @param element 스타일링을 시도하는 요소 
  @param styleObj 스타일 키와 스타일 값이 담긴 "객체"
*/
export default (element, styleObj) => {
  for (let key in styleObj) {
    element.style[key] = styleObj[key];
  }
};
