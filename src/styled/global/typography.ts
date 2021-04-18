import colors from "@/styled/global/colors";

const style = `
body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.5px;
  line-height: 1.42;
  font-size: 16px;
  color: ${colors.textBlack};
  &.dark {
    color: ${colors.textWhite};
  }
}

h1 {
  font-size: 96px;
  font-weight: 300;
  line-height: 1.2;
}

h2 {
  font-size: 60px;
  font-weight: 300;
  line-height: 1.2;
}

h3 {
  font-size: 48px;
}

h4 {
  font-size: 34px;
}

h5 {
  font-size: 24px;
}

h6 {
  font-size: 20px;
  font-weight: 500;
}

.subtitle {
  font-size: 16px;
  font-weight: 500;
}

.size-small {
  font-size: 14px;
}

.caption {
  font-size: 12px;
}

p {
  margin: 10px 0;
}
`;

export default style;
