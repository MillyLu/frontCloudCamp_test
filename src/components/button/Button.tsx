import styles from './index.module.css'

type Props = {
    title: string;
    name: string;
    onClick?: () => void;
  };

export function Button ({ title, name, onClick}: Props) {
    return(
        <button onClick={onClick} className={name==="start" ? styles.btn_start : styles.btn_back}>{title}</button>
    )
}