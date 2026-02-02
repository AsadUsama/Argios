import Styles from './offers.module.scss';
import Heading from '../sectionHeading/sectionHeading'
import productOne from '../../assest/cards/ProductOne.png';
import productTwo from '../../assest/cards/productTwo.png';
import productThree from '../../assest/cards/productThree.png';
import productFour from '../../assest/cards/productFour.png';
import iconOne from '../../assest/cards/offerIconOne.png';
import iconTwo from '../../assest/cards/offerIconTwo.png';
import iconThree from '../../assest/cards/offerIconThree.png';
import iconFour from '../../assest/cards/offerIconFour.png';
// import Button from '../../components/button/button'
import AboutProduct from '../aboutProducts/aboutProducts';

const offers = [
    {
        id: 1,
        src: productOne,
        text: 'Agriculture Product',
        alt: 'Agricultire Pro   duct',
        btnText: 'Read More',
        icon: iconOne

    },
    {
        id: 2,
        src: productTwo,
        text: 'Organic Product',
        alt: 'Organic Product',
        btnText: 'Read More',
        icon: iconTwo

    },
    {
        id: 3,
        src: productThree,
        text: 'Fresh Vegitables',
        alt: 'Fresh Vegitables',
        btnText: 'Read More',
        icon: iconThree

    },
    {
        id: 4,
        src: productFour,
        text: 'Dairy Product',
        alt: 'Dairy Product',
        btnText: 'Read More',
        icon: iconFour

    }
]

export default function Offer() {

    return (
        <div className={Styles.offerBg}>
            <div className="container">
                <Heading
                    miniHeading="Our Services"
                    mainHeading="What We Offer" />
                <AboutProduct />
                {/* <div className="row">
                    <div className={Styles.offerWrap}>
                        {offers.map((offer) => (
                            <div className={Styles.offerCard} key={offer.id}>
                                <div className={Styles.overlay}></div>
                                <Button className={Styles.offerBtn}>{offer.btnText}</Button>
                                <img className={Styles.offerBg} src={offer.src} alt={offer.alt} />
                                <div className={Styles.textWrap}>
                                    <h4>{offer.text}</h4>
                                </div>
                                <img className={Styles.iconImg} src={offer.icon} alt="" />

                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    )

}