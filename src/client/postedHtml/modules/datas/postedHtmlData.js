import jsonDirList from "../../../modules/array/createdJsonDirList.js";
/**
 * TYPE[OBJECT]
 *
 * STATUS[O] - 현재 상태
 *
 * CHECKLIST: 24.05.31/11:08 AM 구현
 *
 * NOTE: 1. posted.html 템플릿
 */
export default Object = {
  postedHtml: {
    rootHtmlData: `
        <div id="modal">
          <div id="x-icon">
            <i class="fas fa-x"></i>
          </div>
          <form action="/public/html/posted.html" method="post">
            <input type="text" name="title" id="" />
            <textarea name="content" id="" cols="30" rows="10"></textarea>
            <button type="submit">글 작성</button>
          </form>
        </div>
    
        <div>
          <div class="w-8 h-1/4 bg-pink-400">
              <header class="w-24 h-52">
                  <div id="input-box" class="w-full h-full">
                      <button id="posting-button" class="bg-zinc-300">글 작성</button>
                  </div>
              </header>
          </div>
        <main>
          <aside id="postings" class="">
            <ul>
              ${jsonDirList
                .map((fileName) => {
                  return `<li>${fileName}</li>`;
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
