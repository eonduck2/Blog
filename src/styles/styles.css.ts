// import { createTheme, style } from "@vanilla-extract/css";

// export const [themeClass, vars] = createTheme({
//   color: {
//     brand: "blue",
//     white: "#fff",
//   },
//   space: {
//     small: "4px",
//     medium: "8px",
//   },
// });

// export const hero = style({
//   backgroundColor: vars.color.brandd,
//   color: vars.color.white,
//   padding: vars.space.large,
// });

// import { style, globalStyle } from "@vanilla-extract/css";

// export const myStyle = style({
//   display: "flex",
//   paddingTop: "3px",
// });

// globalStyle("body", {
//   margin: 0,
// });

import { style } from "@vanilla-extract/css";

export const container = style({
  padding: 10,
});
