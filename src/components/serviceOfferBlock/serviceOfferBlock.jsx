import Styles from "./serviceOfferBlock.module.scss";
import IntroMainHeading from "../common/introHeadingMain/introHeadingMain";
import ServiceOfferImg from "../../assest/others/serviceOfferImg.png";
import harvestingIcon from "../../assest/icons/harvestingIcon.svg"
import maintenanceIcon from "../../assest/icons/maintenanceIcon.svg"
import fencingIcon from "../../assest/icons/fencingIcon.svg"


const services = [
    {
        id: 1,
        src: harvestingIcon,
        text: "Harvesting",
        alt: "Harvesting Icon",
        bgColor: "#4CAF50"
    },
    {
        id: 2,
        src: maintenanceIcon,
        text: "Maintenance",
        alt: "Maintenance Icon",
        bgColor: "#8BC34A"
    },
    {
        id: 3,
        src: fencingIcon,
        text: "Fencing",
        alt: "Fencing Icon",
        bgColor: "#FFCA28"
    }
];


export default function ServiceOfferBlock() {
    return (

        <div className="container">
            <div className="row">
                <section className={Styles.serviceOfferBlock}>
                    <div className={Styles.serviceOfferImg}>
                        <img src={ServiceOfferImg} alt="" />

                    </div>
                    <div className={Styles.serviceOfferData}>
                        <IntroMainHeading
                            subHeading="What we do"
                            mainHeading="Healthy Food for Good Growth"
                        />
                        <p className={Styles.serviceOfferText}>
                            Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit
                            sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo sit met
                            entum cubilia crae onec.
                        </p>
                        <p className={Styles.serviceOfferText}>
                            Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere dui.
                            Pellentesque venenatis sem non lacus ac auctor.

                        </p>
                        <div className={Styles.serviceOfferCards}>
                            {services.map((service) => (
                                <div key={service.id} className={Styles.serviceOfferCard} style={{ backgroundColor: service.bgColor }}>
                                    <img src={service.src} alt={service.alt} />
                                    <p>{service.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}