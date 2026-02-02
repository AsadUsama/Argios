import PageHeader from "../components/pageHeader/pageHeader"
import ContactCards from "../components/contactCards/contactCards"
import ContactMap from "../components/contactMap/contactMap"
export default function Contact() {
    return (
        <>
            <PageHeader
                heading="Contact" />
            <ContactCards />
            <ContactMap />
        </>
    )
}