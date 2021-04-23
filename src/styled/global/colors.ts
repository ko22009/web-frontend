const basicColors = {
  black: "#424242",
  white: "#fff",
  dark: "#616161",
  blueLight: "#2a5493",
  blue: "#005cba",
  blueDark: "#023687",
  grayLight: "#f3f3f3",
  gray: "#e6e4e4",
  grayDark: "#c1bbbb",
  red: "#dc143c",
  redDark: "#B22222",
  yellow: "#ffc107",
  yellowDark: "#eeaa19",
};

const colors = {
  ...basicColors,
  textBlack: basicColors.black,
  textWhite: basicColors.white,
  bgDarkMode: basicColors.dark,
  bgDark: basicColors.dark,
  active: {
    bg: basicColors.blue,
    border: basicColors.blue,
    color: basicColors.white,
  },
  activated: {
    bg: basicColors.blueDark,
  },
  disabled: {
    bg: basicColors.grayLight,
    border: basicColors.gray,
    color: basicColors.grayDark,
  },
  bgGray: basicColors.grayLight,
  bgGrayDarken: "#3d3838ff",
  activeBlue: "#008cba",
};

export default colors;
