import Styles from './footerHeading.module.scss';


export default function FooterHeading({ text }) {
    return (
        <h3 className={Styles.footerHeading}>{text}</h3>
    )
}