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
  },

  modal: {
    width: `25rem`,
    height: `25rem`,
    backgroundColor: `red`,
  },

  "content-header": {
    width: "100%",
    height: "10%",
    backgroundColor: `black`,
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
    width: `100%`,
    listStyleType: `none`,
    fontSize: `20px`,
    fontWeight: 400,
    margin: `0px`,
    padding: `0px`,
  },

  "content-section": {
    width: "65%",
    height: "95%",
    backgroundColor: `aqua`,
  },
};
