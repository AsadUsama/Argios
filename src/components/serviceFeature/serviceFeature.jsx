import Styles from "./serviceFeature.module.scss";
import serviceFeaturesOne from "../../assest/cards/serviceFeatureOne.png"
import serviceFeaturesTwo from "../../assest/cards/serviceFeatureTwo.png"
import serviceFeaturesThree from "../../assest/cards/serviceFeatureThree.png"

const features = [
    {
        id: 1,
        src: serviceFeaturesOne,
        text: "Quality Standards",
        alt: "Quality Farms"

    },
    {
        id: 2,
        src: serviceFeaturesTwo,
        text: "Organic Farming",
        alt: "Organic Farms"

    },
    {
        id: 3,
        src: serviceFeaturesThree,
        text: "Agriculture Products",
        alt: "Agriculture Products"

    }

]

export default function ServiceFeature() {
    return (
        <div className="container">
            <div className="row">
                <div className={Styles.serviceFeatures}>
                    {features.map((feature) => (
                        <div key={feature.id} className={Styles.featureCard}>
                            <a>{feature.text}</a>
                            <img src={feature.src} alt={feature.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}