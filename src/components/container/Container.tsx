import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
  name: string;
};

export function Container({ children, name }: Props) {
  return <section className={name==="Main" ? styles.container : styles.container_form}>{children}</section>;
}
