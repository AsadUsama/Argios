import Styles from "./chooseUs.module.scss";
import benifits from "../../assest/others/benifits.png"
import Button from "../button/button";
import SectionHeading from "../sectionHeading/sectionHeading";


export default function ChooseUs() {
    return (
        <div className="container">
            <div className="row">
                <div className={Styles.chooseUs}>
                    <div className={Styles.tabHeading}>
                        <h4>Our Farm Benifits</h4>
                        <h1>Why Choose Agrios Market</h1>
                        <p> There are many variations of passages of available but the
                            majortity have sufferred alteration in some form by injected
                            humor or random word which don't look even.
                        </p>


                    </div>


                    <div className={Styles.imgWrap}>
                        <div className={Styles.imgText}>
                            <h2>Agriculture Professtional Leader</h2>
                        </div>
                        <img src={benifits} alt="Farm Image" />
                    </div>
                    <div className={Styles.textWrap}>
                        <div className={Styles.textContent}>
                            <h4>Our Farm Benifits</h4>
                            <h1>Why Choose Agrios Market</h1>
                            <p className={Styles.mainPara}> There are many variations of passages of available but the
                                majortity have sufferred alteration in some form by injected
                                humor or random word which don't look even.
                            </p>
                            <div className={Styles.features}>
                                <div className={Styles.feature}>
                                    <h3>Quality Organic Food</h3>
                                    <p>There are variation You need to be sure there is
                                        anything hidden in the middle of text.</p>
                                </div>
                                <div className={Styles.feature}>
                                    <h3>Professional Farmers</h3>
                                    <p>There are variation You need to be sure there is
                                        anything hidden in the middle of text.</p>
                                </div>
                                <div className={Styles.feature}>
                                    <h3>Quality Products</h3>
                                    <p>There are variation You need to be sure there is
                                        anything hidden in the middle of text.</p>
                                </div>
                            </div>
                            <Button>discover More</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


