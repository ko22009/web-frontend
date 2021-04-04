import React, { ComponentType, CSSProperties } from "react";
import { Table as ReactTable } from "react-bootstrap";

export interface ITable {
  colspan?: number;
  rowspan?: number;
  content?: string;
  bold?: boolean;
  component?: ComponentType;
}

export enum FixedType {
  left = 1,
  right = 2,
}

export interface TableBody {
  style?: CSSProperties;
  content: ITable[];
  fixed?: FixedType;
  show?: boolean;
}

export interface IHeadContent extends ITable {
  fixed?: FixedType;
  show?: boolean;
}

export interface TableHead {
  style?: CSSProperties;
  content: IHeadContent[];
  fixed?: FixedType;
  show?: boolean;
}

export interface tableProps {
  inputRef?: React.Ref<HTMLTableElement>;
  tHead?: TableHead[];
  tBody?: TableBody[];
}

class Table extends React.Component<tableProps, any> {
  render() {
    const { tHead, tBody, inputRef, ...props } = this.props;
    return (
      <ReactTable ref={inputRef} {...props} size={"sm"} bordered>
        <thead>
          {tHead &&
            tHead.length > 0 &&
            tHead.map((tr, i) => {
              return (
                <tr key={i} style={tr.style}>
                  {tr.content.map((th, i) => {
                    return (
                      <th
                        data-fixed={th.fixed}
                        key={i}
                        rowSpan={th.rowspan}
                        colSpan={th.colspan}
                      >
                        {th.content}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
        </thead>
        <tbody>
          {tBody &&
            tBody.length > 0 &&
            tBody.map((tr, iRow) => {
              return (
                <tr key={iRow} style={tr.style}>
                  {tr.content.map((td, iCol) => {
                    const className = td.bold ? "font-weight-bold" : "";
                    let content = td.content;
                    let Component;
                    if (td.component) {
                      Component = td.component;
                    }
                    return (
                      <td
                        className={className}
                        key={iCol}
                        rowSpan={td.rowspan}
                        colSpan={td.colspan}
                      >
                        {content}
                        {Component && <Component />}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </ReactTable>
    );
  }
}

export default React.forwardRef<HTMLTableElement, tableProps>((props, ref) => {
  return <Table {...props} inputRef={ref} />;
});
