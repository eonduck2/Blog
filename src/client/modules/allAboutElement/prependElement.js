/** 
 * TYPE[FUNCTION]
 * 
 * STATUS[O] - 현재 상태
 
 * CHECKLIST: 24.06.02

 * NOTE: 부모 Element에 특정 Element를 Appending 해주는(가장 앞으로) 함수
 * @param parentEle append 자리를 내어주는 부모 요소
 * @param childEle parentEle에 appending될 자식 요소
 * @param thirdEle 제 3 요소(전달받은 값 존재 시, childEle에 appending)
*/

export default (parentEle, childEle, thirdEle) => {
  if (parentEle == undefined || childEle == undefined) {
    return;
  } else if (parentEle != undefined && childEle != undefined) {
    parentEle.prepend(childEle);
    return;
  } else {
    if (
      parentEle != undefined &&
      childEle != undefined &&
      thirdEle != undefined
    ) {
      childEle.prepend(thirdEle);
      return;
    }
  }
};
