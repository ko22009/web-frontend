import React from "react";
import styled from "styled-components";
import colors from "@/styled/global/colors";

interface Props {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

interface Checked {
  checked?: boolean;
  disabled?: boolean;
}

const Theme = styled.div<Checked>`
  display: flex;
  align-items: inherit;
  justify-content: inherit;
  color: ${(props) =>
    props.disabled
      ? colors.gray
      : props.checked
      ? colors.blue
      : colors.blackLight};
`;

const Label = styled.label<Checked>`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${(props) => (props.disabled ? colors.gray : "")};
`;

const Svg = styled.svg`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
`;

const Input = styled.input`
  display: none;
`;

function Checkbox(props: Props) {
  const defaultBox =
    "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z";
  const checkedBox =
    "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z";
  return (
    <Label disabled={props.disabled}>
      <Theme checked={props.checked} disabled={props.disabled}>
        <Svg>
          <path d={props.checked ? checkedBox : defaultBox} />
        </Svg>
      </Theme>
      {props.label}
      <Input type="checkbox" {...props} />
    </Label>
  );
}

export default Checkbox;
