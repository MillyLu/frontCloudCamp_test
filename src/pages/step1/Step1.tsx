import { useState } from "react";
import MultiStepProgressBar from "../../components/progressBar/ProgressBar";
import styles from "./index.module.css";
import Form from "../../components/form/Form";
import { Container } from "../../components/container/Container";
import { Modal } from "../../components/modal/Modal";

export function StepOne() {
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <Container name="Form">
      <div className={styles.progress}>
        <MultiStepProgressBar page={page} onPageNumberClick={setPage} />
      </div>

      <Form
        step={page}
        setStep={setPage}
        setSuccess={setSuccess}
        setModal={setModal}
      />
      {modal && success && <Modal success="done" setModal={setModal} />}
      {modal && !success && <Modal success="error" setModal={setModal} />}
    </Container>
  );
}
