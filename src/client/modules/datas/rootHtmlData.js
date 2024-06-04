import jsonDirList from "../array/createdJsonDirList.js";

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

export default {
  rootHtml: {
    modalData: `
        <div id ="modal">
          <div id="x-icon">
            <i class="fas fa-x"></i>
          </div>
          <form  action="/" method="post" onsubmit="return false" id="posting-form">
            <input type="text" name="title" id="title" />
            <textarea name="content" id="" cols="30" rows="10"></textarea>
          </form>
          <button id="submit-btn">작성하기</button>
        </div>`,

    rootHtmlData: `    
        <header id="content-header">
            <button id="posting-button">글 쓰기</button>
        </header>
        <main id="content-main">
          <aside id="posting-list">
            <div id="posting-title-container">
              <span id="posting-title">📋 작성 글 목록</span>
            </div>
            <ul id="content-ul">
              ${jsonDirList
                .map((fileName) => {
                  return `<li style ="margin:7px; word-break: break-all;">📒 ${fileName
                    .substr(10)
                    .replace(".json", "")}</li>`;
                })
                .join("")}
            </ul>
          </aside>
          <section id="content-section">
            <div id="content-section-title"></div>
            <div id="content-section-content"></div>
          </section>
        </main>
      `,
  },
};
