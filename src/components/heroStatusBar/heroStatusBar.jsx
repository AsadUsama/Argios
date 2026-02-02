import Styles from "./heroSectionBar.module.scss";
import Banner from "../bannerImg/bannerImg";
import StatusBarMain from "../common/statusBar/statusBar";


export default function HeroStatusSection() {
    return (
        <>
            <StatusBarMain
                statusDataWrap={Styles.statusDataWrap} />
            <Banner />
        </>
    )
}
