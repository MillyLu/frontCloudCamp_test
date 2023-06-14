import { Container } from "../../components/container/Container";
import { Button } from "../../components/button/Button";
import styles from './index.module.css';
import logo from '../../assets/Avatar.png'


export function Main () {

    return(
        <Container>
            <header className={styles.header}>
                <img className={styles.header_logo} src={logo} alt="logo"/>
                <div className={styles.header_info}>
                    <h2 className="">Иван Иванов</h2>
                    <div className={styles.header_info__link}>
                        <span className={styles.header_info__pic}>🖿<a className={styles.header_info__links} href="#">Telegram</a></span>
                        <span className={styles.header_info__pic}>🖿<a className={styles.header_info__links} href="#">GitHub</a></span>
                        <span className={styles.header_info__pic}>🖿<a className={styles.header_info__links} href="#">Resume</a></span>
                    </div>
                </div>
            </header>
            <hr className={styles.line}></hr>
            <form className={styles.form}>
                <label className={styles.form_label} htmlFor="">Номер телефона</label>
                <input className={styles.form_input} type="tel" placeholder="+7 999 999-99-99"/>
                <label className={styles.form_label} htmlFor="">Email</label>
                <input className={styles.form_input} type="email" placeholder="tim.jennings@example.com"/>

                <Button title="Начать" name='start' />
            </form>
        </Container>
    )

}