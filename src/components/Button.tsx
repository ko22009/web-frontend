import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
`;

function button(props: any) {
  return <Button {...props} />;
}

export default button;
