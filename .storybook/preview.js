import "./styles.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  themes: {
    list: [{ name: "dark", class: "dark", color: "rgb(51, 51, 51)" }],
  },
};
