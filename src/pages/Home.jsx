import Hero from "../components/heroSection/HeroSection";
import Sponser from "../components/sponserBar/sponserBar";
import Intro from "../components/introSec/intro";
import Feature from "../components/featureSection/featureSec";
import Offers from '../components/offersSection/offers';
import HeroStatusSection from "../components/heroStatusBar/heroStatusBar"
import Projects from "../components/projects/projects";
import Testimonials from "../components/testimonials/testimonials";
import ChooseUs from "../components/chooseUs/chooseUs";
import News from "../components/news/news";


export default function Home() {
    return (
        <>

            <Hero />
            <Feature />
            <Intro />
            < Offers />
            <HeroStatusSection />
            <Projects />
            <Testimonials />
            <ChooseUs />
            <News />
            <Sponser />
        </>
    )
}