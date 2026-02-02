import Styles from './intro.module.scss';
import { Link } from 'react-router-dom';
import VegBasket from '../../assest/icons/vegBasket.svg'
import LabTest from '../../assest/icons/labTest.svg'
import BannerOne from "../../assest/others/introTwo.png"
import BannerTwo from "../../assest/others/introOne.png"

import Button from "../button/button"


const types = [
    { index: 0, src: VegBasket, alt: 'Icon', text: 'Growing fruits vegetables', size: '60px' },
    { index: 1, src: LabTest, alt: 'Icon', text: 'Tips for ripening your fruits', size: '60px' }
]



export default function Intro() {
    return (
        <div className="container">
            <div className={`row ${Styles.introRow}`}>
                <div className={Styles.introImages}>

                    <img className={Styles.bannerOne} src={BannerOne} alt="Banner Img" />
                    <img className={Styles.bannerTwo} src={BannerTwo} alt="Banner Image" />

                </div>
                <div className={Styles.introContent}>
                    <div className={Styles.intro}>
                        <p className={Styles.introParaOne}>Our Introduction</p>
                        <h1 className={Styles.introHeadingTwo}>Agriculture & Organic Product Farm</h1>
                        <h5 className={Styles.introHeadingThree}>Agrios is the largest global organic farm.</h5>
                        <p className={Styles.introHeadingFour}>There are many variations of passages of lorem ipsum available but the
                            majority have suffered alteration in some form by injected humor or
                            random word which don’t look even.</p>
                        <div className={Styles.introTypes}>
                            {types.map((type) => (
                                <div className={Styles.introType} key={type.index}>
                                    <img src={type.src} alt={type.alt} width={type.size} height={type.size} />
                                    <p>{type.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className={Styles.introList}>
                            <p className={` ${Styles.list} ${Styles.listOne}`}>Lorem ipsum is not simply random Text.</p>
                            <p className={` ${Styles.list} ${Styles.listTwo}`}>Making this first true generator on the internet</p>
                        </div>
                        <Link to="/services" ><Button className={Styles.introBtn}>Discover More</Button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}