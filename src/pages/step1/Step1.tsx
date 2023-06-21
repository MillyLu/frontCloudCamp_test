import { useState } from "react";
import MultiStepProgressBar from "../../components/progressBar/ProgressBar";
import styles from "./index.module.css";
import Form from "../../components/form/Form";
import { Container } from "../../components/container/Container";

export function StepOne() {
  const [page, setPage] = useState(1);

  const nextPage = (page: number) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber: string) => {
    switch (pageNumber) {
      case "1":
        setPage(1);
        break;
      case "2":
        setPage(2);
        break;
      case "3":
        setPage(3);
        break;
      case "4":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage(1);
    }
  };

  type Props = {
    onPageNumberClick: () => number;
  };

  return (
    <Container>
      <div className={styles.progress}>
        <MultiStepProgressBar page={page} onPageNumberClick={setPage} />
      </div>

      <Form step={page} setStep={setPage} />
    </Container>
  );
}
