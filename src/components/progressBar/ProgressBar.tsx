import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import "react-step-progress-bar/styles.css";
import styles from "./index.module.css";

type Props = {
  page: number;
  onPageNumberClick: (page: number) => void;
};

type PropsStep = {
  accomplished: boolean;
  index: number;
};

const MultiStepProgressBar = ({ page, onPageNumberClick }: Props) => {
  var stepPercentage = 0;

  if (page === 1) {
    stepPercentage = 0;
  } else if (page === 2) {
    stepPercentage = 50;
  } else if (page === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }: PropsStep) => (
          <div
            className={
              accomplished
                ? styles.indexedStep_accomplished
                : styles.indexedStep
            }
          >
            <span
              className={
                accomplished && page === 1
                  ? styles.indexedStep_progress
                  : accomplished
                  ? styles.indexedStep_element
                  : styles.indexedStep_empty
              }
            ></span>
            <span
              className={styles.indexedStep_number}
              onClick={() => onPageNumberClick(1)}
            >
              {index + 1}
            </span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: PropsStep) => (
          <div
            className={
              accomplished
                ? styles.indexedStep_accomplished
                : styles.indexedStep
            }
            // onClick={() => onPageNumberClick("2")}
          >
            <span
              className={
                accomplished && page === 2
                  ? styles.indexedStep_progress
                  : accomplished
                  ? styles.indexedStep_element
                  : styles.indexedStep_empty
              }
            ></span>
            <span
              className={styles.indexedStep_number}
              onClick={() => onPageNumberClick(2)}
            >
              {index + 1}{" "}
            </span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: PropsStep) => (
          <div
            className={
              accomplished
                ? styles.indexedStep_accomplished
                : styles.indexedStep
            }
            // onClick={() => onPageNumberClick("3")}
          >
            <span
              className={
                accomplished && page === 3
                  ? styles.indexedStep_progress
                  : accomplished
                  ? styles.indexedStep_element
                  : styles.indexedStep_empty
              }
            ></span>
            <span
              className={styles.indexedStep_number}
              onClick={() => onPageNumberClick(3)}
            >
              {index + 1}
            </span>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
