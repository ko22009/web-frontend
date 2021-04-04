import React from "react";

import { Header } from "../components/Header";

export interface PageProps {
  auth: boolean;
}

export const Page: React.FC<PageProps> = ({ auth }) => (
  <article>
    <Header auth={auth} />
  </article>
);
