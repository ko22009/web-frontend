import React from "react";

export enum TypeGap {
  default,
}

interface Gap {
  [key: string]: React.CSSProperties;
}

export const styleGap: Gap = {
  default: {
    margin: "20px",
  },
};
