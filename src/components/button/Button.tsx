import styles from './index.module.css'

type Props = {
    title: string;
    name: string;
  };

export function Button ({ title, name}: Props) {
    return(
        <button className={name==="start" ? styles.btn_start : styles.btn_back}>{title}</button>
    )
}