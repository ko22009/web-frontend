import React from "react";
import styled from "styled-components";
import colors from "@/styled/global/colors";

interface Props {
  value: string;
  label: string;
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

function Radio(props: Props) {
  const defaultBox =
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z";
  const checkedBox =
    "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z";
  return (
    <Label disabled={props.disabled}>
      <Theme checked={props.checked} disabled={props.disabled}>
        <Svg>
          <path d={defaultBox} />
          {props.checked && <path d={checkedBox} />}
        </Svg>
      </Theme>
      {props.label}
      <Input type="radio" {...props} />
    </Label>
  );
}

export default Radio;
