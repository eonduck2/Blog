/** 
 * TYPE[OBJECT]
 * 
 * STATUS[O] - 현재 상태
 
 * CHECKLIST: 24.05.29

 * NOTE: 특정 Element의 태그 이름과 Class, Id가 Property로 담겨있는 Object
*/

export default Object = {
  parentElements: {
    root: document.getElementById(`root`),
  },

  domElements: {},

  divs: {
    root: {
      element: `div`,
      className: ``,
      id: `root`,
    },
    rootFirstChildDiv: {
      element: `div`,
      className: `root-first-child-div`,
      id: ``,
    },

    rootSecondChildDiv: {
      element: `div`,
      className: `root-second-child-div`,
      id: ``,
    },

    rootThirdChildDiv: {
      element: `div`,
      className: `root-third-child-div`,
      id: ``,
    },

    rootFourthChildDiv: {
      element: `div`,
      className: `root-fourth-child-div`,
      id: ``,
    },

    rootFifthChildDiv: {
      element: `div`,
      className: `root-fifth-child-div`,
      id: ``,
    },

    firstSectionFirstChildDiv: {
      element: `div`,
      className: `first-section-first-child-div`,
      id: ``,
    },

    firstSectionSecondChildDiv: {
      element: `div`,
      className: `first-section-second-child-div`,
      id: ``,
    },
    div: {
      element: `div`,
      className: ``,
      id: ``,
    },

    rootFirstDiv: {
      element: `div`,
      className: `test`,
      id: `test`,
    },
  },

  semantics: {
    header: {
      element: `header`,
      className: `semantic-header`,
      id: ``,
    },

    nav: {
      element: `nav`,
      className: ``,
      id: ``,
    },

    main: {
      element: `main`,
      className: `semantic-main`,
      id: ``,
    },

    firstSection: {
      element: `section`,
      className: `first-section`,
      id: ``,
    },

    aside: {
      element: `aside`,
      className: ``,
      id: ``,
    },

    footer: {
      element: `footer`,
      className: `semantic-footer`,
      id: ``,
    },
  },

  p: {
    element: `p`,
    className: ``,
    id: ``,
  },

  span: {
    element: `span`,
    className: ``,
    id: ``,
  },

  ul: {
    element: `ul`,
    className: ``,
    id: ``,
  },

  headerLi: {
    element: `li`,
    className: `header-menu-li`,
    id: ``,
  },

  // firstSectionFirstChildDivImg: {
  //   element: `img`,
  //   className: `first-section-first-child-div-img`,
  //   id: ``,
  // },

  // firstSectionSecondChildDivImg: {
  //   element: `img`,
  //   className: `first-section-second-child-div-img`,
  //   id: ``,
  // },
};
