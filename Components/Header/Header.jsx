import styles from './Header.module.css';
import logo from '../../assets/logo.png';

export const Header = () =>{


    return(
        <div className={styles.header}>
                <img src={logo} alt="logo" />
            <div className={styles.menu}>
                <a href="#">Головна</a>
                <a href="#">Ціни</a>
                <a href="#">Розклад групових занять</a>
                <div className={styles.hoverlist}>Про нас▼
                    <div className={styles.listBlock}>
                        <a href="#">Контакти</a>
                        <a href="#">Тренери</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
