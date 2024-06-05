/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 * 
 * CHECKLIST: 24.06.05
 * 
 * NOTE: 1. 작성 글 리스트에 컨텐츠를 나타내기 위한 클릭 이벤트 추가
  @param NoParam
*/
export default () => {
  document.querySelectorAll(`li`).forEach((element) => {
    element.onclick = () => {
      console.log(1);
    };
  });
};
