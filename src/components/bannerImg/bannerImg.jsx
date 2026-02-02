import Styles from "./bannerImg.module.scss";
import banner from '../../assest/heroBanners/bannerImg.png'


export default function Banner() {
    return (


        <div className={Styles.bannerContainer}>
            <img src={banner} alt="Banner Img" />
        </div>

    )
}