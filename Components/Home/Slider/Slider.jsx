import img1 from '../../../assets/sliderImg/1.jpg';
import img2 from '../../../assets/sliderImg/2.jpg';
import img3 from '../../../assets/sliderImg/3.jpg';
import styles from './Slider.module.css';


export const Slider = () =>{
    return(
        <div className={styles.slider}>
            <div className={styles.imgFull}>
                
            </div>
            <img src={img1} alt="img1" />
            <img src={img2} alt="img1" />
            <img src={img3} alt="img1" />

        </div>
    )
}


