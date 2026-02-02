import Styles from "./servicesProduct.module.scss";
import ProductCard from "../common/productCard/productCard"
import serviceOne from "../../assest/cards/serviceOne.png";
import serviceTwo from "../../assest/cards/serviceTwo.png";
import serviceThree from "../../assest/cards/serviceThree.png";
import serviceFour from "../../assest/cards/serviceFour.png";
import iconOne from "../../assest/cards/offerIconOne.png";
import iconTwo from "../../assest/cards/offerIconTwo.png";
import iconThree from "../../assest/cards/offerIconThree.png";
import iconFour from "../../assest/cards/offerIconFour.png";

const services = [
    {
        id: 1,
        src: serviceOne,
        text: "Agricultre Products",
        alt: 'Apple Farm Image',
        iconSrc: iconOne,
        iconAlt: "Card Icon"

    },
    {
        id: 2,
        src: serviceTwo,
        text: "Organic Products",
        alt: "Apple Collection",
        iconSrc: iconTwo,
        iconAlt: "Card Icon"


    },
    {
        id: 3,
        src: serviceThree,
        text: "Fresh Vegetables",
        alt: "Fresh Vegetables",
        iconSrc: iconThree,
        iconAlt: "Card Icon"


    },
    {
        id: 4,
        src: serviceFour,
        text: "Dairy Products",
        alt: "Graped Images",
        iconSrc: iconFour,
        iconAlt: "Card Icon"

    },
];

export default function ServiceProduct() {
    return (
        <div className="container">
            <div className="row">
                <div className={Styles.serviceCards}>
                    {
                        services.map((service) => (
                            <ProductCard
                                variant='service'

                                src={service.src}
                                key={service.id}
                                btnText={service.btnText}
                                title={service.text}
                                iconSrc={service.iconSrc}
                                alt={service.alt}
                                iconAlt={service.iconAlt}

                            />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}