import RobotoLight from "./roboto/Roboto-Light.ttf";
import RobotoLightItalic from "./roboto/Roboto-LightItalic.ttf";
import RobotoRegular from "./roboto/Roboto-Regular.ttf";
import RobotoRegularItalic from "./roboto/Roboto-Italic.ttf";
import RobotoMedium from "./roboto/Roboto-Medium.ttf";
import RobotoMediumItalic from "./roboto/Roboto-MediumItalic.ttf";

const style = `@font-face {
  font-family: "Roboto";
  src: url(${RobotoLight}) format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url(${RobotoLightItalic}) format("truetype");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: "Roboto";
  src: url(${RobotoRegular}) format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url(${RobotoRegularItalic}) format("truetype");
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "Roboto";
  src: url(${RobotoMedium}) format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url(${RobotoMediumItalic}) format("truetype");
  font-weight: 500;
  font-style: italic;
}`;

export default style;
