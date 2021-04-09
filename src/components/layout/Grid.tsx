import React from "react";
import "./Grid.scss";

export enum GridDirection {
  horizontal,
  vertical,
}

interface IGrid {
  direction?: keyof typeof GridDirection;
  children?: JSX.Element[] | JSX.Element;
  inline?: boolean;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  columnGap?: string;
  rowGap?: string;
  className?: string;
  style?: React.CSSProperties;
  wrapped?: boolean;
}

const Grid = (props: IGrid) => {
  const style: React.CSSProperties = {
    ...props.style,
    gridTemplateColumns: props.gridTemplateColumns,
    gridTemplateRows: props.gridTemplateRows,
    columnGap: props.columnGap,
    rowGap: props.rowGap,
  };
  let className = ["grid"];
  className.push(
    `grid-${
      props.direction
        ? props.direction
        : GridDirection[GridDirection.horizontal]
    }`
  );
  if (props.inline) className.push("inline-grid");
  if (props.wrapped) className.push("grid-wrapped");
  if (props.className) className.push(props.className);
  return (
    <div className={className.join(" ")} style={style}>
      {props.children}
    </div>
  );
};

export default Grid;
