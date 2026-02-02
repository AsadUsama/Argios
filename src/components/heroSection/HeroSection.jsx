import Styles from './HeroSection.module.scss';
import Button from "./../button/button";
import { Link } from "react-router-dom";
export default function HeroSection() {
    return (
        <>
            <header className={Styles.bgImg}>
                <div className={Styles.heroContainer}>
                    <div className={`row ${Styles.heroRow} `}>
                        <div className={Styles.heroSec}>
                            <p className={Styles.heroHeadingone}>Welcome To Agrios Farming</p>
                            <h1>Agriculture <span className={Styles.and}>&</span> <span className={Styles.eco}>Eco Farming</span></h1>
                            <p className={Styles.heroPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <Link to="/services" ><Button className={Styles.heroBtn}>Discover More</Button></Link>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}