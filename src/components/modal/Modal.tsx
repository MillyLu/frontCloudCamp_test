import { Button } from "../button/Button";
import styles from "./index.module.css";
import done from "../../assets/success.png";
import error from "../../assets/cancel.png";
import { useNavigate } from "react-router-dom";

type Props = {
  success: string;
  setModal: (value: boolean) => void;
};

export function Modal({ success, setModal }: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        {success === "done" && (
          <>
            <h2 className={styles.modal_title}>Форма успешно отправлена</h2>
            <div className={styles.modal_img}>
              <img className={styles.modal_img_done} alt="success" src={done} />
            </div>

            <Button
              name="start"
              title="На главную"
              onClick={() => {
                setModal(false);
                navigate("/");
              }}
            />
          </>
        )}
        {success === "error" && (
          <>
            <h2 className={styles.modal_title}>Ошибка</h2>
            <div className={styles.modal_img}>
              <img
                className={styles.modal_img_done}
                alt="success"
                src={error}
              />
            </div>

            <Button
              name="start"
              title="Закрыть"
              onClick={() => setModal(false)}
            />
          </>
        )}
      </div>
    </div>
  );
}
