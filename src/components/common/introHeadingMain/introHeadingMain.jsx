import Styles from "./introHeadingMain.module.scss";

export default function IntroMainHeading({
    subHeading,
    mainHeading,


}) {
    return (
        <div className={Styles.headingWrap}>
            <p className={Styles.subHeading}>{subHeading}</p>
            <h1 className={Styles.mainHeading} >{mainHeading}</h1>
        </div>
    )
} 