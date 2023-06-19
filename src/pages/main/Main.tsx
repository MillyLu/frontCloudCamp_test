import { Container } from "../../components/container/Container";
import { Button } from "../../components/button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./index.module.css";
import logo from "../../assets/Avatar.png";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setMain } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

type Inputs = {
  phone: string;
  email: string;
};

export function Main() {
  const userPhone = useAppSelector((state) => state.user.phone);
  const userMail = useAppSelector((state) => state.user.email);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: userPhone || "",
      email: userMail || "",
    },
  });

  const onSubmit = (data: any) => {
    dispatch(setMain(data));
    navigate("/form");
  };

  return (
    <Container>
      <header className={styles.header}>
        <img className={styles.header_logo} src={logo} alt="logo" />
        <div className={styles.header_info}>
          <h2 className="">Иван Иванов</h2>
          <div className={styles.header_info__link}>
            <span className={styles.header_info__pic}>
              🖿
              <a className={styles.header_info__links} href="#">
                Telegram
              </a>
            </span>
            <span className={styles.header_info__pic}>
              🖿
              <a className={styles.header_info__links} href="#">
                GitHub
              </a>
            </span>
            <span className={styles.header_info__pic}>
              🖿
              <a className={styles.header_info__links} href="#">
                Resume
              </a>
            </span>
          </div>
        </div>
      </header>
      <hr className={styles.line}></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.form_label} htmlFor="">
          Номер телефона
        </label>
        <input
          className={styles.form_input}
          type="tel"
          placeholder="+7 999 999-99-99"
          {...register("phone", { required: true })}
        />
        <label className={styles.form_label} htmlFor="">
          Email
        </label>
        <input
          className={styles.form_input}
          type="email"
          placeholder="tim.jennings@example.com"
          {...register("email", { required: true })}
        />

        <Button title="Начать" name="start" />
      </form>
    </Container>
  );
}
