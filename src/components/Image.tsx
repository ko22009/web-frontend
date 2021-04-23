import styled from "styled-components";
import React from "react";

const Image = styled.img`
  max-width: 100%;
  display: block;
`;

function ImageComponent(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <Image {...props} />;
}

export default ImageComponent;
