import styles from "./index.module.css";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setFirstStep } from "../../store/userSlice";
import { Button } from "../button/Button";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormInputs = {
  nickname: string;
  name: string;
  sername: string;
  sex: string; // type?
  advantages: string[];
  checkbox: string[];
  radio: number | undefined;
  about: string;
};
type Props = {
  step: number;
  setStep: (page: number) => void;
};

/*const schema = yup.object({
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
  advantages: yup.array().required("Advantages is a required field"), // добавить кнопку удаления/добавления поля
  checkbox: yup.array().required("Checkbox is a required field"),
  radio: yup.number().required("Radio is a required field"),
  about: yup.string().required("About is a required field"),
  });*/

const formSchema = {
  advantage: yup.string().required("Advantage is a required field"),
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
    .of(yup.object().shape(formSchema))
    .required("Must have fields")
    .min(1, "Minimum of 1 field")
    //  .array()
    //  .of(idx: yup.string())
    .required("Advantages is a required field"), // добавить кнопку удаления/добавления поля
  // checkbox: yup.array().required("Checkbox is a required field"),
  // radio: yup.number().required("Radio is a required field"),
  about: yup.string().required("About is a required field"),
});

export interface IFormProps {}

export default function Form({ step, setStep }: Props) {
  const dispatch = useAppDispatch();
  const userNickname = useAppSelector((state) => state.user.nickname);
  const userName = useAppSelector((state) => state.user.name);
  const userSername = useAppSelector((state) => state.user.sername);
  const userSex = useAppSelector((state) => state.user.sex);
  const userAdvantages = useAppSelector((state) => state.user.advantages);
  console.log(userAdvantages);

  const [length, setLength] = useState(0);
  const [newAdvantage, setNewAdvantage] = useState("");
  const [ads, setAds] = useState(["", "", ""]);

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
      sex: userSex || "",
      advantages: [{ advantage: "" }],
      // checkbox: [],
      // radio: undefined,
      about: "",
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });

  /*const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // dispatch(setFirstStep(data));
  };*/
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(setFirstStep(data));
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

          {fields.map((item, index) => {
            return (
              <>
                <label key={index}>
                  <input
                    {...register(`advantages.${index}`)}
                    name={`advantages[${index}].advantage`}
                    defaultValue={`${item.advantage}`}
                    type="text"
                    className="form-check-input"
                  />
                  <span className="mx-2"></span>
                </label>

                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </>
            );
          })}
          <button
            type="button"
            onClick={() => {
              append({ advantage: "" });
            }}
          >
            append
          </button>
          <Button title="+" name="back" />
          <p className={styles.form_label}>Checkbox group</p>

          <div className={styles.form_btn__place}>
            <Button title="Назад" name="back" />
            <Button
              title="Вперед"
              name="start"
              onClick={() => {
                setStep(3);
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
            <Button title="Отправить" name="start" />
          </div>
        </div>
      )}
    </form>
  );
}
