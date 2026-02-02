import Styles from "./aboutTestimonial.module.scss";
import SectionHeading from "../sectionHeading/sectionHeading"
import testimonialImg from "../../assest/others/testimonialImg.png"
import testimonialImgOne from "../../assest/others/testimonialImgOne.png"


const testimonials = [
    {
        id: 1,
        name: 'Sarah Albert',
        role: 'Customer',
        text:
            `There are many variations of passage of 
            available but the majority have suffered 
            alteration in some form by injected 
            humor or randomed.`,
        image: testimonialImg,
        alt: "Sarah Albert's Image"
    },
    {
        id: 2,
        name: 'Bonnie Tolbet',
        role:
            'Customer',
        text:
            `There are many variations of passage of 
         available but the majority have suffered 
        alteration in some form by injected 
        humor or randomed.`,
        image: testimonialImgOne,
        alt: "Sarah Albert's Image"
    }

];


function Testimonials() {



    return (



        <div className={Styles.testimonialSection}>
            {testimonials.map((testimonial) => (

                <div id="abouttestimonials" className={Styles.testimonialCard} key={testimonial.id}>
                    <img src={testimonial.image} alt={testimonial.alt} />

                    <div className={Styles.testimonialData}>
                        <p>{testimonial.text}</p>

                        <div className={Styles.customerData}>
                            <p className={Styles.name}>{testimonial.name}</p>
                            <p>{testimonial.role}</p>
                        </div>
                    </div>
                </div>

            ))}

        </div>


    )
}


export default function AboutTestimonial() {
    return (
        <div className={Styles.testimonialBg}>
            <div className="container">

                <SectionHeading
                    miniHeading="Our Testimonals"
                    mainHeading="What They Say" />
                <div className="row">
                    <Testimonials />
                </div>

            </div>
        </div>
    )
}