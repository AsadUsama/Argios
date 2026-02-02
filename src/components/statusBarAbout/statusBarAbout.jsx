import Styles from "./statusBarAbout.module.scss";
import BannerImg from '../bannerImg/bannerImg';
import StatusBarMain from "../common/statusBar/statusBar"


export default function StatusSection() {
    return (
        <>
            <BannerImg />
            <StatusBarMain
                statusBg={Styles.aboutStatusBg} />
        </>
    )
}