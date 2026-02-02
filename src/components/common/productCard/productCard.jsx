import Styles from './productCard.module.scss';
import { Link } from 'react-router-dom';
import Button from "../../button/button";
import ProductCardBody from '../productCardBody/productCardBody';




export default function ProductCard({
    src,
    bgImage,
    alt,
    btnText = "Read More",
    btnClass,
    title,
    cardClass,
    cardBody,
    iconSrc,
    iconAlt,
    variant = '',
    to
}) {




    return (
        // <div className={`${Styles.servicesCards} ${cardWrapper}`}>
        <div className={`${Styles.servicesCard} ${cardClass} ${Styles[variant + 'Card']}`} >
            <Link to={to}><Button className={`${Styles.btn} ${btnClass}`}>{btnText}</Button></Link>
            <img className={Styles.bgImage} src={src} alt={alt} />
            <div className={Styles.overlay}></div>
            <ProductCardBody
                title={title}
                cardBody={cardBody}
                variant={variant}
                iconSrc={iconSrc}
                iconAlt={iconAlt} />

        </div>


        // </div>

    )
}