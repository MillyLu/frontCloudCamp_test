import { Button } from '../button/Button';
import styles from './index.module.css';


type Props = {
    success: string;
}


export function Modal({ success }: Props) {

    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
        {success === "done" && (
            <>
            <h2 className={styles.modal_title}>Форма успешно отправлена</h2>
            <div className={styles.modal_img}></div>
            <Button name='start' title='На главную' onClick={()=> console.log('object')}/>
            </>
          

)}
</div>
        </div>

    )
}
