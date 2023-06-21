import { Container } from "../../components/container/Container";
import { Button } from "../../components/button/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styles from "./index.module.css";
import logo from "../../assets/Avatar.png";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setMain } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";

type Inputs = {
  phone: string;
  email: string;
};

const schema = yup.object().shape({
  phone: yup
    .string()
    //.matches(
    //  /^$| ^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    // "Phone should contain only numbers"
    // )
    .required("Phone is a required field"),
  email: yup.string().email().required("Email is a required field"),
});

export function Main() {
  const userPhone = String(useAppSelector((state) => state.user.phone));
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
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
        <label className={styles.form_label} htmlFor="phone">
          Номер телефона
        </label>

        <InputMask
          id="phone"
          className={styles.form_input}
          {...register("phone", { required: true })}
          mask="+7 (999) 999-99-99"
          name="phone"
        />
        <p className={styles.form_message}>{errors?.phone?.message}</p>
        <label className={styles.form_label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
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
