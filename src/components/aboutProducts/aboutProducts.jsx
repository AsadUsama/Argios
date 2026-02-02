import Styles from "./aboutProducts.module.scss"
import ProductCard from "../common/productCard/productCard"
import productOne from "../../assest/cards/productOne.png"
import productTwo from "../../assest/cards/productTwo.png"
import productThree from "../../assest/cards/productThree.png"
import productFour from "../../assest/cards/productFour.png"
import iconOne from "../../assest/cards/offerIconOne.png";
import iconTwo from "../../assest/cards/offerIconTwo.png";
import iconThree from "../../assest/cards/offerIconThree.png";
import iconFour from "../../assest/cards/offerIconFour.png";

const about = [
    {
        id: 1,
        src: productOne,
        text: "Agricultre Products",
        alt: 'Apple Farm Image',
        iconSrc: iconOne,
        iconAlt: "Card Icon",
        to: '/shop'

    },
    {
        id: 2,
        src: productTwo,
        text: "Organic Products",
        alt: "Apple Collection",
        iconSrc: iconTwo,
        iconAlt: "Card Icon",
        to: '/shop'


    },
    {
        id: 3,
        src: productThree,
        text: "Fresh Vegetables",
        alt: "Fresh Vegetables",
        iconSrc: iconThree,
        iconAlt: "Card Icon",
        to: '/shop'


    },
    {
        id: 4,
        src: productFour,
        text: "Dairy Products",
        alt: "Graped Images",
        iconSrc: iconFour,
        iconAlt: "Card Icon",
        to: '/shop'


    },
];



export default function AboutProduct() {
    return (
        <div className="row">
            <div className={Styles.aboutWrapper}>
                {about.map((product) => (
                    <ProductCard
                        variant="about"
                        key={product.id}
                        src={product.src}
                        title={product.text}
                        iconSrc={product.iconSrc}
                        iconAlt={product.iconAlt}
                        alt={product.alt}
                        to={product.to}
                    />
                ))}
            </div>
        </div>

    )
}