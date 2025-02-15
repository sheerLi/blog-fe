import type { FC } from "react";

import { HeaderLogo } from "./logo";
import $styles from "./styles.module.css";

export const Header: FC = () => {
  return (
    <header className={$styles.header}>
      <HeaderLogo />
    </header>
  );
};
