import styles from "./index.module.css";

type Props = {
  placeholder: string;
};

export function TextInput({ placeholder }: Props) {
  return (
    <input type="text" className={styles.textfield} placeholder={placeholder} />
  );
}
