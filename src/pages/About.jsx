import PageHeader from "../components/pageHeader/pageHeader"
import IntroAbout from '../components/introAbout/introAbout';
import StatusSection from "../components/statusBarAbout/statusBarAbout";
import AboutTestimonial from "../components/aboutTestimonals/aboutTestimonial";
import OurFarmers from "../components/ourFarmers/ourFarmers"
export default function About() {
    return (
        <>
            <PageHeader
                heading="About" />
            <IntroAbout />
            <StatusSection />
            <AboutTestimonial />
            <OurFarmers />
        </>
    )
}