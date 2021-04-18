import { createGlobalStyle } from "styled-components";
import reset from "./global/reset";
import fonts from "./global/fonts";
import typography from "./global/typography";
import utils from "@/styled/global/utils";
import colorsPalette from "@/styled/global/colorsPalette";
import icons from "./global/icons";

export default createGlobalStyle`
  ${reset}
  ${fonts}
  ${typography}
  ${utils}
  ${colorsPalette}
  ${icons}
  html,
  body,
  #root {
    height: 100%;
  }
`;
