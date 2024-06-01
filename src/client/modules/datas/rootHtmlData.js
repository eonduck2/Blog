import jsonDirList from "../array/createdJsonDirList.js";
import modalStyle from "../styles/CSS/styles.js";

/**
 * TYPE[OBJECT]
 *
 * STATUS[O] - 현재 상태
 *
 * CHECKLIST: 24.05.28
 *
 * NOTE: 모달(글 쓰기) 버튼 클릭 시, 모달 창 팝업
 *
 */

export default Object = {
  rootHtml: {
    modalData: `
          <div id="x-icon">
            <i class="fas fa-x"></i>
          </div>
          <form class ="${modalStyle}" action="/" method="post" onsubmit="return false" id="posting-form">
            <input type="text" name="title" id="title" />
            <textarea name="content" id="" cols="30" rows="10"></textarea>
          </form>
          <button id="submit-btn">작성하기</button>`,

    rootHtmlData: `
        <div id="modal"></div>
    
        <div>
          <div>
              <header>
                  <div>
                      <button id="posting-button">팝업</button>
                  </div>
              </header>
          </div>
        <main>
          <aside id="posting-list" class="">
            <ul>
              ${jsonDirList
                .map((fileName) => {
                  return `<li>${fileName.substr(10).replace(".json", "")}</li>`;
                })
                .join("")}
            </ul>
          </aside>
          <section>
            <div></div>
            <div></div>
          </section>
        </main>
      </div>`,
  },
};
