import React from "react";
import { TypeGap, styleGap } from "@/utils/gap";

type Props = {
  children: JSX.Element[] | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  gap?: keyof typeof TypeGap | boolean;
};

const GridItem = (props: Props) => {
  let { className, gap, style, ...anotherProps } = props;
  let classes = [];
  if (className) classes.push(className);
  let styleList = style;
  let gapStyle = {};
  if (typeof gap === "boolean") {
    gapStyle = styleGap[TypeGap[TypeGap.default]];
  } else if (typeof gap === "string") {
    gapStyle = styleGap[gap];
  }
  styleList = { ...gapStyle, ...styleList };
  return (
    <div
      className={classes.join(" ")}
      style={{ ...styleList }}
      {...anotherProps}
    />
  );
};

export default GridItem;
