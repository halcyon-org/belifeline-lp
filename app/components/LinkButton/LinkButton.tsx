import type { ReactNode } from "react";
import * as styles from "./styles.css";
import classNames from "classnames";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function LinkButton({ href, children, className }: Props): ReactNode {
  return (
    <a className={classNames(styles.linkButton, className)} href={href}>
      {children}
    </a>
  );
}
