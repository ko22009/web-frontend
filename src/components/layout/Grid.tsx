import React from "react";
import styled from "styled-components";

export enum GridDirection {
  horizontal = "column",
  vertical = "row",
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

const Grid = styled.div<IGrid>`
  display: ${(props) => (props.inline ? "inline-grid" : "grid")};
  grid-auto-flow: ${(props) =>
    props.direction
      ? GridDirection[props.direction]
      : 'unset'};
  ${(props) =>
    props.wrapped &&
    `
      max-width: 960px;
      margin: 0 auto;`}
`;

function grid(props: IGrid) {
  const style: React.CSSProperties = {
    ...props.style,
    gridTemplateColumns: props.gridTemplateColumns,
    gridTemplateRows: props.gridTemplateRows,
    columnGap: props.columnGap,
    rowGap: props.rowGap,
  };
  return (
    <Grid
      wrapped={props.wrapped}
      inline={props.inline}
      direction={props.direction}
      style={style}
    >
      {props.children}
    </Grid>
  );
}

export default grid;
