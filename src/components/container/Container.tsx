import styles from "./index.module.css";

type Props = {
  children?: React.ReactNode;
};

export function Container({ children }: Props) {
  return <section className={styles.container}>{children}</section>;
}
