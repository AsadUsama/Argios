import Styles from './introImages.module.scss'

export default function IntroImages({
    introSrcOne,
    introSrcTwo,
    introAltOne,
    introAltTwo,
    imgWrapper,
    introImgOne,
    introImgTwo
}) {

    return (
        <>
            <div className={`${Styles.introImgWrap} ${imgWrapper}`}>
                <img className={`${Styles.imgOne} ${introImgOne}`} src={introSrcOne} alt={introAltOne} />
                <img className={`${Styles.imgTwo} ${introImgTwo}`} src={introSrcTwo} alt={introAltTwo} />
            </div>
        </>
    )

}