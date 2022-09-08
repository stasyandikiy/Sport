import styles from './Home.module.css';
import WelcomeHome from '../../assets/HomeWelcome.png';
import logo from '../../assets/logo.png';
import { InfoGym } from './InfoGym/InfoGym';
import { Slider } from './Slider/Slider';

export const Home = () =>{
    return(
        <div>
            <div className={styles.home}>
                <img src={WelcomeHome} alt="imgBg" />
                <div className={styles.blockWelcome}>
                    <h1>МЕРЕЖА ФІТНЕС КЛУБІВ<p>НА ТРОЄЩИНІ</p></h1>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <Slider />
            <InfoGym />

        </div>
    )
}