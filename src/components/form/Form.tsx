import styles from "./index.module.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setFirstStep } from "../../store/userSlice";
import { Button } from "../button/Button";

/*type Inputs = {
  name: string;
  nickname: string;
};*/
type Props = {
  step: number;
  setStep: (page: number) => void;
};

export interface IFormProps {}

export default function Form({ step, setStep }: Props) {
  const dispatch = useAppDispatch();
  const userNickname = useAppSelector((state) => state.user.nickname);
  const userName = useAppSelector((state) => state.user.name);
  const userSername = useAppSelector((state) => state.user.sername);
  const userSex = useAppSelector((state) => state.user.sex);

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
      checkbox: Array<number>
    },
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
            {...register("nickname", { required: true })}
            placeholder="NickName"
          />
          <p className={styles.form_message}></p>
          <label htmlFor="name" className={styles.form_label}>
            Name
          </label>
          <input
            {...register("name", { required: true })}
            className={styles.form_input}
            placeholder="Name"
          />
          <p className={styles.form_message}></p>
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
              onClick={() => {  // не срабатывает
                setStep(2);
                console.log(step);
              }}
            />
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={styles.stepOne}>
           <label htmlFor="advantages" className={styles.form_label}>
            Advantages
          </label>
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
          <label htmlFor="checkbox" className={styles.form_label}>
            Checkbox
            </label>
          <label>
        <input
          type="checkbox"
          {...control} 
          //onChange={handleChange}
        />
        1
      </label>
      <label className={styles.form_label__checkbox}>
        <input
          type="checkbox"
          {...control} 
          //onChange={handleChange}
        />
        2
      </label>
      <label>
        <input
        className={styles.form_input__checkbox}
          type="checkbox"
          {...control} 
          //onChange={handleChange}
        />
        3
      </label>
     
           <div className={styles.form_btn__place}>
            <Button title="Назад" name="back" />
            <Button
              title="Вперед"
              name="start"
              onClick={() => {  // не срабатывает
                setStep(2);
                console.log(step);
              }}
            />
          </div>

          <input type="submit" />
        </div>
      )}
    </form>
  );
}
