import MaterialIconsRegular from "./icons/MaterialIcons-Regular.woff2";
import MaterialIconsTwoToneRegular from "./icons/MaterialIconsTwoTone-Regular.woff2";
import MaterialIconsSharpRegular from "./icons/MaterialIconsSharp-Regular.woff2";
import MaterialIconsOutlinedRegular from "./icons/MaterialIconsOutlined-Regular.woff2";
import MaterialIconsRoundRegular from "./icons/MaterialIconsRound-Regular.woff2";

const style = `
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(${MaterialIconsRegular}) format("woff2");
}

@font-face {
  font-family: "Material Icons Two Tone";
  font-style: normal;
  font-weight: 400;
  src: url(${MaterialIconsTwoToneRegular}) format("woff2");
}

@font-face {
  font-family: "Material Icons Sharp";
  font-style: normal;
  font-weight: 400;
  src: url(${MaterialIconsSharpRegular}) format("woff2");
}

@font-face {
  font-family: "Material Icons Round";
  font-style: normal;
  font-weight: 400;
  src: url(${MaterialIconsOutlinedRegular}) format("woff2");
}

@font-face {
  font-family: "Material Icons Outlined";
  font-style: normal;
  font-weight: 400;
  src: url(${MaterialIconsRoundRegular}) format("woff2");
}

.material-icons {
  font-family: "Material Icons", serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.material-icons-two-tone {
  font-family: "Material Icons Two Tone", serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.material-icons-sharp {
  font-family: "Material Icons Sharp", serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.material-icons-round {
  font-family: "Material Icons Round", serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.material-icons-outlined {
  font-family: "Material Icons Outlined", serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
`;

export default style;
