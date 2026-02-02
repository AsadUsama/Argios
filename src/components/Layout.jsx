import { Outlet } from "react-router-dom";
import Topbar from "./topbar/topbar";
import InfoBar from "./infoBar/infoBar";
import Navbar from "./navBar/navBar";
import Footer from './footer/footer';

export default function Layout() {
    return (
        <>
            <Topbar />
            <InfoBar />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
