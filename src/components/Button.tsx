import React from "react";
import styled, { ThemeProvider } from "styled-components";
import colors from "@/styled/global/colors";

const normal = {
  color: colors.white,
  bg: colors.blue,
  border: colors.blue,
  activeBg: colors.blueDark,
  activeBorder: colors.blueDark,
  activeColor: colors.white,
};

const danger = {
  color: colors.white,
  bg: colors.red,
  border: colors.red,
  activeBg: colors.redDark,
  activeBorder: colors.redDark,
  activeColor: colors.white,
};

const warning = {
  color: colors.white,
  bg: colors.yellow,
  border: colors.yellow,
  activeBg: colors.yellowDark,
  activeBorder: colors.yellowDark,
  activeColor: colors.white,
};

const success = {
  color: colors.white,
  bg: colors.green,
  border: colors.green,
  activeBg: colors.greenDark,
  activeBorder: colors.greenDark,
  activeColor: colors.white,
};

const variantTheme: any = {
  normal,
  danger,
  warning,
  success,
};

interface Theme {
  color: string;
  bg: string;
  activeBg: string;
}

function invertTheme(theme: Theme) {
  return {
    color: theme.bg,
    bg: "transparent",
    border: theme.bg,
    activeBg: theme.activeBg,
    activeBorder: theme.activeBg,
    activeColor: theme.color,
  };
}

const disabled = {
  bg: colors.grayLight,
  color: colors.gray,
};

enum Variant {
  danger,
  warning,
  success,
}

interface Props {
  inverted?: boolean;
  variant?: keyof typeof Variant;
}

const Button = styled.button`
  font-family: Roboto, sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.5em 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.bg};
  border: 2px solid ${(props) => props.theme.border};
  &:disabled {
    cursor: default;
    color: ${disabled.color};
    background: ${disabled.bg};
    border: 2px solid ${disabled.bg};
  }
  &:focus {
    outline: none;
  }
  &:active:not([disabled]) {
    color: ${(props) => props.theme.activeColor};
    background: ${(props) => props.theme.activeBg};
    border: 2px solid ${(props) => props.theme.activeBorder};
  }
`;

function ButtonComponent(
  props: Props & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { inverted, variant, ...another } = props;
  let theme = variantTheme["normal"];
  if (variant) {
    theme = variantTheme[variant];
  }
  let Component = <Button {...another} />;
  if (inverted)
    Component = <ThemeProvider theme={invertTheme}>{Component}</ThemeProvider>;
  return <ThemeProvider theme={theme}>{Component}</ThemeProvider>;
}

export default ButtonComponent;
