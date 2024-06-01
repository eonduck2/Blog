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

// export default Object = {
//   rootHtml: {
//     rootHtmlData: `
//     <div id="modal">
//       <div id="x-icon">
//         <i class="fas fa-x"></i>
//       </div>
//       <form action="/" method="post">
//         <input type="text" name="title" id="" />
//         <textarea name="content" id="" cols="30" rows="10"></textarea>
//         <button type="submit">작성하기</button>
//       </form>
//     </div>

//     <div>
//       <div class="w-8 h-1/4 bg-pink-400">
//           <header class="w-24 h-52">
//               <div id="input-box" class="w-full h-full">
//                   <button id="posting-button" class="bg-zinc-300">팝업</button>
//               </div>
//           </header>
//       </div>
//     <main>
//       <aside id="postings" class="">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </aside>
//       <section>
//         <div></div>
//         <div></div>
//       </section>
//     </main>
//   </div>
//     `,
//   },
// };
export default Object = {
  rootHtml: {
    rootHtmlData: `
        <div id="modal">
          <div id="x-icon">
            <i class="fas fa-x"></i>
          </div>
          <form action="/" method="post">
            <input type="text" name="title" id="" />
            <textarea name="content" id="" cols="30" rows="10"></textarea>
            <button type="submit">작성하기</button>
          </form>
        </div>
    
        <div>
          <div class="w-8 h-1/4 bg-pink-400">
              <header class="w-24 h-52">
                  <div id="input-box" class="w-full h-full">
                      <button id="posting-button" class="bg-zinc-300">팝업</button>
                  </div>
              </header>
          </div>
        <main>
          <aside id="postings" class="">
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
