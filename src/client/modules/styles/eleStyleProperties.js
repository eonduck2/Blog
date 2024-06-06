/** 
 * TYPE[OBJECT]
 * 
 * STATUS[O] - 현재 상태
 * 
 * CHECKLIST: 24.05.28
 * 
 * NOTE: 특정 id의 스타일링 값을 지정

  @param NoParam
*/
export default {
  body: {
    width: `100vw`,
    height: `100vh`,
    overflow: `hidden`,
  },

  root: {
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    position: `relative`,
  },

  "modal-container": {
    width: `100vw`,
    position: `fixed`,
    height: `100vh`,
    backgroundColor: `rgb(120, 120, 120, 0.7)`,
  },

  modal: {
    width: `50%`,
    height: `90%`,
    backgroundColor: `white`,
    position: `fixed`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    border: `2px solid black`,
    borderRadius: `7px`,
  },

  "x-icon-container": {
    width: `100%`,
    height: `10%`,
    display: `flex`,
    justifyContent: `flex-end`,
  },

  "icon-end-container": {
    width: `10%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  "x-icon": {
    fontSize: `25px`,
    cursor: `pointer`,
  },

  "posting-form": {
    width: `100%`,
    height: `70%`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: `20px`,
  },

  title: {
    width: `80%`,
    height: `10%`,
    outline: `none`,
    border: `2px solid black`,
    borderRadius: `7px`,
  },

  content: {
    width: `80%`,
    height: `80%`,
    outline: `none`,
    border: `2px solid black`,
    borderRadius: `7px`,
    resize: `none`,
  },

  "submit-btn-container": {
    width: `100%`,
    height: `20%`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  "submit-btn": {
    width: `81%`,
    height: `40%`,
    outline: `none`,
    color: `RGB(36, 36, 36)`,
    backgroundColor: `white`,
    border: `2px solid black`,
    borderRadius: `7px`,
    cursor: `pointer`,
    letterSpacing: `2px`,
    fontWeight: 600,
    fontSize: `14px`,
  },

  "content-header": {
    width: "100%",
    height: "10%",
    backgroundColor: `white`,
    border: `2px solid black`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  "posting-button": {
    width: `50%`,
    height: `50%`,
    backgroundColor: `RGB(52, 128, 235)`,
    outline: `none`,
    border: `none`,
    borderRadius: `7px`,
    color: `white`,
    cursor: `pointer`,
  },

  "content-main": {
    width: "100%",
    height: "90%",
    backgroundColor: `red`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  "posting-list": {
    width: "25%",
    height: "95%",
    backgroundColor: `blue`,
    overflowY: `auto`,
    overflowX: `hidden`,
  },

  "posting-title-container": {
    width: `100%`,
    height: `10%`,
    backgroundColor: `green`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  "posting-title": {
    fontSize: `20px`,
    fontWeight: 600,
  },

  "content-ul": {
    // width: `100%`,
    listStyleType: `none`,
    fontSize: `20px`,
    fontWeight: 400,
    margin: `0px`,
    padding: `0px`,
  },

  "content-section": {
    width: "65%",
    height: "95%",
    display: `flex`,
    flexDirection: `column`,
    backgroundColor: `aqua`,
    gap: `40px`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  "content-section-title": {
    width: "80%",
    height: "10%",
    backgroundColor: `black`,
  },

  "content-section-content": {
    width: "80%",
    height: "80%",
    backgroundColor: `purple`,
  },
};
