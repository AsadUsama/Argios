import PageHeader from "../components/pageHeader/pageHeader";
import ServicesSponser from "../components/servicesSponser/servicesSponser"
import Banner from "../components/bannerImg/bannerImg";
import ServiceFeature from "../components/serviceFeature/serviceFeature";
import ServiceOfferBlock from "../components/serviceOfferBlock/serviceOfferBlock";
import ServiceCTA from "../components/serviceCTA/serviceCTA";
import ServiceProduct from "../components/servicesProduct/servicesProduct";

export default function Services() {
    return (
        <>
            <PageHeader
                heading="Services"
            />
            <ServiceProduct />
            <ServicesSponser />
            <Banner />
            <ServiceFeature />
            <ServiceOfferBlock />
            <ServiceCTA />
        </>
    );
}
