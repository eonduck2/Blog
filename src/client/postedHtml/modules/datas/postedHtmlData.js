// import fs from "fs";

// FIXME: 브라우저 환경에서 node 모듈인 fs 임포트
// IMPORTANT: either "/", "./", or "../".
export default Object = {
  postedHtml: {
    jsonFileList() {
      fs.readdir("./src/json", (err, fileList) => {
        if (err) {
          throw new Error(`디렉토리 리딩 에러`);
        }
        return fileList;
      });
    },
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
              ${this.jsonFileList().map((title) => `<li>${title}</li>`)}
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