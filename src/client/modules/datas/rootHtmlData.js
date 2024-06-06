import jsonDirList from "../array/createdJsonDirList.js";
import fileListObj from "../array/createdJsonFileDataList.js";

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
          <div id="x-icon-container">
            <div id="icon-end-container">
              <i class="fas fa-x" id="x-icon"></i>
            </div>
          </div>
          <form  action="/" method="post" onsubmit="return false" id="posting-form">
            <input type="text" name="title" id="title" />
            <textarea name="content" id="content" cols="30" rows="10"></textarea>
          </form>
          <div id="submit-btn-container">
            <button id="submit-btn">작성하기</button>
          </div>
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
                  const elementId = fileName.replace(`.json`, "");
                  const title = fileListObj[elementId].title;
                  return `<li style ="margin:7px; word-break: break-all; cursor:pointer;" id="${elementId}">📒 ${title}</li>`;
                })
                .join("")}
            </ul>
          </aside>
          <section id="content-section">
            <div id="content-section-title">
                <span id="section-title"></span>
            </div>
            <div id="content-section-content">
                <p id="section-content"></p>
            </div>
          </section>
        </main>
      `,
  },
};
