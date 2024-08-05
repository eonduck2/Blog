/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 * 
 * CHECKLIST: 24.06.02 12:03 AM 구현 시작
 * 
 * NOTE: 1. 특정 id 값을 가진 element를 찾아내, 반환해주는 기능

  @param obj eleStyleProperties.js 파일에서 정의된 객체
  @param callback 콜백 함수로서, 배열을 반환받아 실행
*/

export default (obj, callback) => {
  callback(Object.keys(obj).filter((id) => document.getElementById(id)));
};
