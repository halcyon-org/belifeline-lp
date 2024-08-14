import { type ReactNode } from "react";
import * as styles from "./styles.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Loading(): ReactNode {
  useGSAP(() => {
    const anim: {
      classNames: string[];
      strokeDasharray: string;
      strokeDashoffset: number;
    }[] = [
      {
        classNames: [".path-b-1", ".path-b-2"],
        strokeDasharray: "412 414",
        strokeDashoffset: 413,
      },
      {
        classNames: [".path-e-1"],
        strokeDasharray: "474 476",
        strokeDashoffset: 475,
      },
    ];

    anim.forEach((a) => {
      gsap.fromTo(
        a.classNames,
        {
          strokeDasharray: a.strokeDasharray,
          strokeDashoffset: a.strokeDashoffset,
          animationDuration: 3800,
          animationTimingFunction: "ease",
          animationDelay: 0,
          animationIterationCount: "infinite",
        },
        {
          strokeDashoffset: 0,
        }
      );
    });
  });

  return (
    <div className={styles.loading}>
      <div className={styles.iconframe}>
        <SvgLogo />
      </div>
    </div>
  );
}

const SvgLogo = (): ReactNode => {
  return (
    <svg
      width="844"
      height="501"
      viewBox="0 0 844 501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-b-1"
        d="M13 0V199"
        stroke="#30305B"
        strokeWidth="25"
      ></path>
      <path
        className="path-b-2"
        d="M25 13.0892C50.3436 13.0891 99.0429 9.10158 99.0429 54.461C99.0429 84.8667 84.135 100.818 25 100.818C53.3252 100.818 106 90.3499 106 143.186C106 194.527 52.3313 186.552 25 186.552"
        stroke="#30305B"
        strokeWidth="25"
      />
      <path
        className="path-e-1"
        d="M171.5 122.5H283.5C283.5 102.5 268 59.5 220.5 59.5C200.5 59.6709 160 70.5 160 122.5C160 143.5 175.5 185.5 220.5 185.5C234 185.5 260 182 276 153.5"
        stroke="#30305B"
        strokeWidth="25"
      />
      <path
        d="M327 86.9999C327 83 330 80 334.5 80C337.5 80 342.5 81.9998 342.5 86.9999C342.5 92 338.333 94.3334 335 94.5001C331 94.5001 327 92.5 327 86.9999Z"
        stroke="#30305B"
        strokeWidth="15"
      />
      <path
        d="M326.5 186C326.5 179.5 331.5 178.5 335 178.5C338.5 178.5 342.5 180.5 342.5 186C342.5 191.5 338.167 193.5 334.5 193.5C330.833 193.5 326.5 192 326.5 186Z"
        stroke="#30305B"
        strokeWidth="15"
      />
      <path d="M13 300.5V486.5H86" stroke="#30305B" strokeWidth="25" />
      <path d="M126.5 350.5V500" stroke="#30305B" strokeWidth="25" />
      <path
        d="M119.182 314.519C119.182 308.5 122.5 307 126.5 307C130 307 134 308 134 314.519C134 321.039 130 322 127 322C123 322 119.182 320 119.182 314.519Z"
        stroke="#30305B"
        strokeWidth="15"
      />
      <path
        d="M235.5 313C225.5 313 193 318.7 193 349.5V500"
        stroke="#30305B"
        strokeWidth="25"
      />
      <path d="M165.5 362.5H236" stroke="#30305B" strokeWidth="25" />
      <path d="M507.5 350.5V500" stroke="#30305B" strokeWidth="25" />
      <path
        d="M499.5 315C499.5 310.5 503.5 307 507 307C510.833 307 514 308.5 514 315C514 319 510.833 322 507 322C503 322 499.5 318.5 499.5 315Z"
        stroke="#30305B"
        strokeWidth="15"
      />
      <path
        d="M286 423H399.5C399.5 391.5 376 362 336 362C313 362 275.5 374.5 275.5 426C275.5 449 294 486.5 338 486.5C361 486.5 381.5 473 393 454"
        stroke="#30305B"
        strokeWidth="25"
      />
      <path d="M560 354V500.5" stroke="#30305B" strokeWidth="27" />
      <path
        d="M560.5 411C557 384.5 586.5 363.5 606.5 363.5C622 363.5 650 374 653 407V500"
        stroke="#30305B"
        strokeWidth="27"
      />
      <path
        d="M716 423H830C830 397 814 361.5 764 361.5C743 361.5 705.5 379 705.5 426.5C705.5 453 728.5 485.571 767.5 486.5C779.996 486.798 807 481 823 454"
        stroke="#30305B"
        strokeWidth="25"
      />
      <path d="M440.5 301.5V500" stroke="#30305B" strokeWidth="25" />
    </svg>
  );
};
