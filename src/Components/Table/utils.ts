import {
  FixedType,
  IHeadContent,
  ITable,
  TableBody,
  TableHead,
} from "@/Components/Table/table";

export function generateCollection(
  tableHead: TableHead[],
  tableBody: TableBody[],
  fixedType: FixedType = FixedType.left
) {
  let Head: TableHead[] = [];
  let Body: TableBody[] = [];
  let normalHead: TableHead[] = [];
  let normalBody: TableBody[] = [];
  let fixedIndex: number[] = [];
  tableHead.forEach((tr, iRow) => {
    if (tr.fixed === fixedType) {
      Head.push(tr);
    } else {
      const { content, ...props } = tr;
      Head[iRow] = {
        ...props,
        content: [],
      };
      normalHead[iRow] = {
        ...props,
        content: [],
      };
      tr.content.forEach((th, iCol) => {
        if (th.fixed) {
          fixedIndex.push(iCol);
          Head[iRow].content.push(th);
        } else {
          normalHead[iRow].content.push(th);
        }
      });
      const temp: IHeadContent[] = [...normalHead[iRow].content];
      normalHead[iRow].content.unshift(...Head[iRow].content);
      Head[iRow].content.push(...temp);
    }
  });
  tableBody.forEach((tr, iRow) => {
    if (tr.fixed === fixedType) {
      Body.push(tr);
    } else {
      const { content, ...props } = tr;
      Body[iRow] = {
        ...props,
        content: [],
      };
      normalBody[iRow] = {
        ...props,
        content: [],
      };
      tr.content.forEach((td, iCol) => {
        if (fixedIndex.includes(iCol)) {
          Body[iRow].content.push(td);
        } else {
          normalBody[iRow].content.push(td);
        }
      });
      const temp: ITable[] = [...normalBody[iRow].content];
      normalBody[iRow].content.unshift(...Body[iRow].content);
      Body[iRow].content.push(...temp);
    }
  });
  return {
    Head,
    Body,
    normalHead,
    normalBody,
  };
}
