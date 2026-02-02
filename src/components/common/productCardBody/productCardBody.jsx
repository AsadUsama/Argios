import Styles from "./productCardBody.module.scss"


export default function ProductCardBody({ title, iconSrc, iconAlt, variant = '' }) {


    return (
        <div className={`${Styles.productBody} ${Styles[variant + 'Body']}`}>
            <h3>{title}</h3>
            <img className={Styles.iconImg} src={iconSrc} alt={iconAlt} />
        </div>
    )

}