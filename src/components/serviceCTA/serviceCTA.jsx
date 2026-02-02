import Styles from "./serviceCTA.module.scss";
import Button from "../button/button";



export default function ServiceCTA() {
    return (
        <div className={Styles.ctaBg}>
            {/* <div className="container"> */}
            <div className="row">
                <div className={Styles.cta}>
                    <div className={Styles.ctaText}>
                        <p className={Styles.ctaPara}>Agriculture Market Leaders</p>
                        <p className={Styles.ctaHeading}>We're popular in agriculture globally</p>
                    </div>
                    <Button variant="secondary">Discover More</Button>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}