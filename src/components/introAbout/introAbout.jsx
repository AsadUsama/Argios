import Styles from './introAbout.module.scss';
import IntroImages from "../common/introImages/introImage";
import MainHeading from "../common/introHeadingMain/introHeadingMain";
import introSrcOne from "../../assest/others/aboutOne.svg";
import introSrcTwo from "../../assest/others/aboutTwo.svg";
import Button from "../button/button";

const benifits = [
    {
        key: 1,
        text: 'Suspe ndisse suscipit sagittis leo'
    },
    {
        key: 2,
        text: 'Entum estibulum disgnissim posuere'
    },
    {
        key: 3,
        text: 'Lorem Ipsum on the tend to repeat'
    },
]


export default function IntroAbout() {
    return (
        <div className="container">
            <div className='row'>
                <div className={Styles.introAboutWrap}>
                    <IntroImages

                        introSrcOne={introSrcOne}
                        introSrcTwo={introSrcTwo}
                        introAltOne="Farm Image"
                        introAltTwo="Farmer Images"
                        imgWrapper={Styles.aboutImgWrap}
                        introImgOne={Styles.aboutImgOne}
                        introImgTwo={Styles.aboutImgTwo}

                    />

                    <div className={Styles.aboutTextWrap}>
                        <MainHeading
                            subHeading="Get to know us"
                            mainHeading="The Best Agriculture Market" />
                        <h3 className={Styles.subHeading}>
                            There are many variations of passa of lorem available, but
                            the majority have suffered alteration.
                        </h3>
                        <p className={Styles.aboutDescription}>
                            There are many variations of passages of lorem ipsum available but the
                            majority have suffered alteration in some form by injected humor or
                            random word which don’t look even.
                        </p>
                        {benifits.map((benifit) => (
                            <p className={Styles.benifits} key={benifit.key}>{benifit.text}</p>
                        ))}

                        <Button
                            className={Styles.aboutBtn}>Discover More</Button>


                    </div>

                </div>
            </div>
        </div>
    )
}