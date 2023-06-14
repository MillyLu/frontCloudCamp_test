import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import styles from "./index.module.css";

type Props = {
  step: number;
};

type PropsStep = {
  accomplished: boolean;
  index: number;
};

const MultiStepProgressBar = ({ step }: Props) => {
  return (
    <ProgressBar
      percent={(step + 1) * 25}
      filledBackground="#664de5"
      height="2px"
      style={{ margin: "auto" }}
    >
      <Step transition="scale">
        {({ accomplished, index }: PropsStep) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#664de5" : null}`,
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            1
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }: PropsStep) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#664de5" : null}`,
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            2
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }: PropsStep) => (
          <div
            style={{
              height: "15px",
              width: "15px",

              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#664de5" : null}`,
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            3
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }: PropsStep) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#664de5" : null}`,
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            4
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
