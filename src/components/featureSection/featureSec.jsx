import Styles from './featureSec.module.scss';
import featureOneImg from '../../assest/cards/featureOne.png';
import featureTwoImg from '../../assest/cards/featureTwo.png';
import featureThreeImg from '../../assest/cards/featureThree.png';


const features = [
    { key: 0, heading: 'Feature 01', src: featureOneImg, text: "We're using a new technology" },
    { key: 1, heading: 'Feature 02', src: featureTwoImg, text: "Good in smart organic services" },
    { key: 2, heading: 'Feature 03', src: featureThreeImg, text: "Reforming in the systems" }
]

export default function Feature() {
    return (
        <div className="container">
            <div className="row">
                <div className={Styles.featureWrap}>
                    {features.map((feature) => (

                        <div className={Styles.feature} key={feature.key}>
                            <h3>{feature.heading}</h3>
                            <img src={feature.src} alt="" />
                            <h2>{feature.text}</h2>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    );
}