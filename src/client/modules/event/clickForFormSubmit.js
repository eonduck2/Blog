/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 *  
 * CHECKLIST: 24.06.01
 * 
 * NOTE: 버튼 클릭 시, 포스팅 form을 서버에 제출하는 함수
  @param NoParam
*/
export default () => {
  const postingForm = document.getElementById(`posting-form`);
  const submitBtn = document.getElementById(`submit-btn`);
  const title = document.getElementById(`title`);

  submitBtn.onclick = () => {
    if (title.value != "") {
      postingForm.submit();
    } else {
      title.placeholder = `글 제목을 입력해주세요`;
    }
  };
};
