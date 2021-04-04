import React from "react";
import {
  FixedType,
  TableBody,
  TableHead,
  tableProps,
} from "@/Components/Table/table";
import "./fixedWrapper.css";
import { generateCollection } from "@/Components/Table/utils";

const fixedWrapper = <P extends object>(
  Table: React.ComponentType<tableProps>
) =>
  class fixedTable extends React.Component<P & tableProps> {
    private readonly fixedHeader = React.createRef<HTMLDivElement>();
    private readonly fixedHeaderRef = React.createRef<HTMLTableElement>();
    private readonly fixedBody = React.createRef<HTMLTableElement>();
    private readonly fixedBodyRef = React.createRef<HTMLTableElement>();
    private readonly fixedColumns = React.createRef<HTMLTableElement>();
    private readonly fixedColumnsRef = React.createRef<HTMLTableElement>();
    constructor(props: P & tableProps) {
      super(props);
      this.fixedScroll = this.fixedScroll.bind(this);
    }
    componentDidMount() {
      const elements = this.fixedBodyRef.current?.querySelectorAll<HTMLTableCellElement>(
        "thead > tr"
      );
      let maxWidth = 0;
      let maxHeight = 0;
      elements?.forEach((tr) => {
        const th = tr.querySelectorAll(`th[data-fixed='${FixedType.left}']`);
        let currentMaxWidth = 0;
        let currentMaxHeight = 0;
        th?.forEach((th) => {
          currentMaxWidth += th.clientWidth + 1;
          currentMaxHeight += th.clientHeight + 1;
        });
        if (currentMaxWidth > maxWidth) maxWidth = currentMaxWidth;
        if (currentMaxHeight > maxHeight) maxHeight = currentMaxHeight;
      });
      const styleFixed = this.fixedHeader.current?.style;
      if (styleFixed) {
        styleFixed.width = `${maxWidth + 1}px`;
      }
      const mainStyle = this.fixedBodyRef.current?.parentElement?.style;
      if (mainStyle) {
      }
      const columnsContainerStyle = this.fixedColumns.current?.style;
      const height = this.fixedBody.current?.clientHeight;
      if (columnsContainerStyle && height) {
        columnsContainerStyle.height = `${height}px`;
        columnsContainerStyle.width = `${maxWidth + 1}px`;
      }
    }
    fixedScroll(e: React.UIEvent<HTMLElement>) {
      this.fixedColumns.current?.scroll({ top: e.currentTarget.scrollTop });
    }
    render() {
      const { tBody, tHead } = this.props;
      const { Head, Body, normalHead, normalBody } = generateCollection(
        tHead as TableHead[],
        tBody as TableBody[]
      );
      const fixedHeadProps = {
        tHead: Head,
        tBody: Body,
        ref: this.fixedHeaderRef,
      };
      const fixedColumnsProps = {
        tHead: Head,
        tBody: Body,
        ref: this.fixedColumnsRef,
      };
      const mainProps = {
        tHead: normalHead,
        tBody: normalBody,
        ref: this.fixedBodyRef,
      };
      const fixedBody = <Table {...mainProps} />;
      const fixedHeaderTable = React.cloneElement(fixedBody, {
        ...fixedHeadProps,
      });
      const fixedColums = React.cloneElement(fixedBody, {
        ...fixedColumnsProps,
      });
      return (
        <div className="fixed-main">
          <div className="fixed-wrapper">
            {/*
           <div className="fixed-header" ref={this.fixedHeader}>
            {fixedHeaderTable}
          </div>
          */}
            <div
              className="fixed-body"
              ref={this.fixedBody}
              onScroll={this.fixedScroll}
            >
              {fixedBody}
            </div>
          </div>

          <div className="fixed-columns">
            <div className="fixed-body" ref={this.fixedColumns}>
              {fixedBody}
            </div>
          </div>
        </div>
      );
    }
  };

export default fixedWrapper;
