import colors from "@/styled/global/colors";

const style = `
body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.5px;
  line-height: 1.42;
  font-size: 1rem;
  color: ${colors.textBlack};
  &.dark {
    color: ${colors.textWhite};
  }
}

h1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}

h2 {
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 1.2;
}

h3 {
  font-size: 3rem;
}

h4 {
  font-size: 2.125rem;
}

h5 {
  font-size: 1.5rem;
}

h6 {
  font-size: 1.25rem;
  font-weight: 500;
}

.subtitle {
  font-size: 1rem;
  font-weight: 500;
}

.size-small {
  font-size: 0.875rem;
}

.caption {
  font-size: 0.75rem;
}

p {
  margin: 1rem 0;
}
`;

export default style;
