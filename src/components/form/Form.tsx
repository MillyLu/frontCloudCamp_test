import styles from "./index.module.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setFirstStep } from "../../store/userSlice";
import { Button } from "../button/Button";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/*type Inputs = {
  name: string;
  nickname: string;
};*/
type Props = {
  step: number;
  setStep: (page: number) => void;
};

const schema = yup.object().shape({
  nickname: yup
    .string()
    .matches(
      /^[a-zA-Z-а-яА-ЯёЁ0-9\s]+$/,
      "Nickname should contain numbers/letters"
    )
    .max(30, "Must be exactly 30 digits")
    .required("Nickname is a required field"),
  name: yup
    .string()
    .matches(/^[a-zA-Z-а-яА-ЯёЁ\s]+$/, "Name should contain only letters")
    .max(50, "Must be exactly 50 digits")
    .required("Name is a required field"),
  sername: yup
    .string()
    .matches(/^[a-zA-Z-а-яА-ЯёЁ\s]+$/, "Surname should contain only letters")
    .max(50, "Must be exactly 50 digits")
    .required("Surname is a required field"),
  sex: yup.string().required("Sex is a required field"), // type?
  advantages: yup
    .array()
    .required("Advantages is a required field"), // добавить кнопку удаления/добавления поля
  checkbox: yup
    .array()
    .required("Checkbox is a required field"),
  radio: yup
    .number()
    .required("Radio is a required field"),
  about: yup
    .string()
    .required("About is a required field"),
});

export interface IFormProps {}

export default function Form({ step, setStep }: Props) {
  const dispatch = useAppDispatch();
  const userNickname = useAppSelector((state) => state.user.nickname);
  const userName = useAppSelector((state) => state.user.name);
  const userSername = useAppSelector((state) => state.user.sername);
  const userSex = useAppSelector((state) => state.user.sex);

  const [length, setLength] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickname: userNickname || "",
      name: userName || "",
      sername: userSername || "",
      sex: userSex || "Не выбрано",
      advantages: [],
      checkbox: [],
      radio: undefined,
      about: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(setFirstStep(data));
    console.log(data);
  };

  const user = useAppSelector((state) => state.user);
  console.log(user);

  //console.log(watch("example")) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {step === 1 && (
        <div className={styles.stepOne}>
          <label htmlFor="nickname" className={styles.form_label}>
            Nickname
          </label>
          <input
            className={styles.form_input}
            id="nickname"
            {...register("nickname")}
            placeholder="NickName"
          />
          <p className={styles.form_message}>{errors?.nickname?.message}</p>
          <label htmlFor="name" className={styles.form_label}>
            Name
          </label>
          <input
            {...register("name", { required: true })}
            className={styles.form_input}
            placeholder="Name"
          />
          <p className={styles.form_message}>{errors?.name?.message}</p>
          <label htmlFor="sername" className={styles.form_label}>
            Surname
          </label>
          <input
            className={styles.form_input}
            {...register("sername", { required: true })}
            placeholder="Surname"
          />
          <p className={styles.form_message}></p>
          <label htmlFor="sex" className={styles.form_label}>
            Sex
          </label>
          <select
            {...register("sex", { required: true })}
            className={styles.form_select}
          >
            <option value="man">man</option>
            <option value="woman">woman</option>
          </select>
          <div className={styles.form_btn__place}>
            <Button title="Назад" name="back" />
            <Button
              title="Вперед"
              name="start"
              onClick={() => {
                // не срабатывает
                setStep(2);
                console.log(step);
              }}
            />
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={styles.stepOne}>
          <p className={styles.form_label}>Advantages</p>
          <input
            className={styles.form_input}
            {...register("advantages", { required: true })}
            placeholder="Add advantages"
          />
          <input
            className={styles.form_input}
            {...register("advantages", { required: true })}
            placeholder="Add advantages"
          />
          <input
            className={styles.form_input}
            {...register("advantages", { required: true })}
            placeholder="Add advantages"
          />
          <Button title="+" name="back" />
          <p className={styles.form_label}>Checkbox group</p>
          <label className={styles.form_label__checkbox}>
            <input
              className={styles.form_input__checkbox}
              type="checkbox"
              {...control}
              //onChange={handleChange}
            />
            1
          </label>
          <label className={styles.form_label__checkbox}>
            <input
              className={styles.form_input__checkbox}
              type="checkbox"
              {...control}
              //onChange={handleChange}
            />
            2
          </label>
          <label className={styles.form_label__checkbox}>
            <input
              className={styles.form_input__checkbox}
              type="checkbox"
              {...control}
              //onChange={handleChange}
            />
            3
          </label>

          <p className={styles.form_label}>Radio group</p>
          <label className={styles.form_label__checkbox} htmlFor="option-1">
            <input
              className={styles.form_input__checkbox}
              type="radio"
              value="1"
              id="option-1"
              {...register("radio")}
            />
            1
          </label>

          <label className={styles.form_label__checkbox} htmlFor="option-2">
            <input
              className={styles.form_input__checkbox}
              type="radio"
              value="2"
              id="option-2"
              {...register("radio")}
            />
            2
          </label>

          <label className={styles.form_label__checkbox} htmlFor="option-3">
            <input
              className={styles.form_input__checkbox}
              type="radio"
              value="3"
              id="option-3"
              {...register("radio")}
            />
            3
          </label>
          <div className={styles.form_btn__place}>
            <Button title="Назад" name="back" />
            <Button
              title="Вперед"
              name="start"
              onClick={() => {
                // не срабатывает
                setStep(2);
                console.log(step);
              }}
            />
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={styles.stepOne}>
          <p className={styles.form_label}>About</p>
          <div className={styles.form_about}>
            <textarea
              onInput={(e) => {
                setLength(
                  (e.target as HTMLTextAreaElement).value.split(" ").join("")
                    .length
                );
              }}
              className={styles.form_about__text}
              {...register("about")}
            />
            <p className={styles.form_about__counter}>{length}/200</p>
          </div>

          <p className={styles.form_message}></p>
          <div className={styles.form_btn__place}>
            <Button title="Назад" name="back" />
            <Button
              title="Отправить"
              name="start"
              onClick={() => {
                // не срабатывает
                setStep(2);
                console.log(step);
              }}
            />
          </div>
        </div>
      )}
    </form>
  );
}
