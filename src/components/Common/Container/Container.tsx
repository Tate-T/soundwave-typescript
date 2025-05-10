import React, { FC } from "react";
import css from "./Container.module.css";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
