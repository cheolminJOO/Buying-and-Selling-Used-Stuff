import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const globalStyles = css `
       * {
          margin: 0;
          box-sizing:border-box;
          font-family : "myfirstfont"
        }

        @font-face {
          font-family: "myfirstfont";
          src: url("/fonts/Jua-Regular.ttf");
        }
      `