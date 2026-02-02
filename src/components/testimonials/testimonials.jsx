import Styles from './testimonials.module.scss'
import Button from '../button/button'
import client from '../../assest/cards/productOne.png'
import testimonialImg from "../../assest/others/testimonialImg.png"
import testimonialImgOne from "../../assest/others/testimonialImgOne.png"
import { useEffect, useState } from 'react'


const testimonials = [
    {
        id: 1,
        name: 'Sarah Albert',
        role: 'Customer',
        text: `There are many variations of passage of 
        available but the majority have suffered 
        alteration in some form by injected 
        humor or randomed.`,
        image: testimonialImg,
        alt: "Sarah Albert's Image"
    },
    {
        id: 2,
        name: 'Bonnie Tolbet',
        role: 'Customer',
        text: `There are many variations of passage of 
        available but the majority have suffered 
        alteration in some form by injected 
        humor or randomed.`,
        image: testimonialImgOne,
        alt: "Bonnie Tolbet's Image"
    },
    {
        id: 3,
        name: 'Michael Johnson',
        role: 'Customer',
        text: `There are many variations of passage of 
        available but the majority have suffered 
        alteration in some form by injected 
        humor or randomed.`,
        image: testimonialImg,
        alt: "Michael Johnson's Image"
    },
    {
        id: 4,
        name: 'Emily Carter',
        role: 'Customer',
        text: `There are many variations of passage of 
        available but the majority have suffered 
        alteration in some form by injected 
        humor or randomed.`,
        image: testimonialImgOne,
        alt: "Emily Carter's Image"
    },
    {
        id: 5,
        name: 'Daniel Lewis',
        role: 'Customer',
        text: `There are many variations of passage of 
        available but the majority have suffered 
        alteration in some form by injected 
        humor or randomed.`,
        image: testimonialImg,
        alt: "Daniel Lewis's Image"
    },
    {
        id: 6,
        name: 'Sophia Turner',
        role: 'Customer',
        text: `There are many variations of passage of 
        available but the majority have suffered 
        alteration in some form by injected 
        humor or randomed.`,
        image: testimonialImgOne,
        alt: "Sophia Turner's Image"
    }
];




export default function Testimonials() {

    const slides = [
        testimonials[testimonials.length - 1], // clone-last
        ...testimonials,                       // real slides
        testimonials[0],                       // clone-first
    ];

    const [index, setIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);



    const handlePrev = () => {
        setIsTransitioning(true);  // ← Enable animation

        setIndex(prevIndex => prevIndex - 1);
    }

    const handleNext = () => {
        setIsTransitioning(true);  // ← Enable animation
        setIndex(prevIndex => prevIndex + 1);
    }

    const handleTransitionEnd = () => {
        // If we're at the clone of the last item (index 0)
        if (index === 0) {
            setIsTransitioning(false);  // Turn off animation
            setIndex(testimonials.length);  // Jump to real last item
        }

        // If we're at the clone of the first item (last position)
        if (index === testimonials.length + 1) {
            setIsTransitioning(false);  // Turn off animation
            setIndex(1);  // Jump to real first item
        }
    };
    useEffect(() => {
        if (!isTransitioning && (index === 0 || index === testimonials.length + 1)) {
            setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
        }
    }, [index, isTransitioning]);


    return (

        <div id='testimonials' className={Styles.chooseBg}>
            <div className="container">
                <div className="row">
                    <div className={Styles.wrapper}>
                        <div className={Styles.wrapperOne}>
                            <div className={Styles.textOne}>
                                <h4>
                                    Our Testimonials
                                </h4>
                                <h1>
                                    What They're Talking
                                    About <span>Agrios</span>
                                </h1>
                                <p>
                                    There are many variations of passages of
                                    available but the majortity have sufferred
                                    alteration in some form by injected humor or
                                    random word which don't look even.
                                </p>
                                <Button>View all testimonials</Button>
                            </div>
                        </div>


                        <div className={Styles.wrapperTwo}>
                            <button onClick={handlePrev} className={`${Styles.arrow} ${Styles.prev}`}></button>
                            <div className={Styles.testimonials}
                                style={{
                                    transform: `translateX(-${index * 100}%)`,
                                    transition: isTransitioning ? 'transform 0.5s ease' : 'none'
                                }}
                                onTransitionEnd={handleTransitionEnd}
                            >
                                {slides.map((testimonial, idx) => (


                                    <div key={idx} className={Styles.testimonial}>
                                        <div className={Styles.testimonialCard}>
                                            <div className={Styles.testimonialData}>
                                                <p>
                                                    {testimonial.text}
                                                </p>
                                                <h3>{testimonial.name}</h3>
                                            </div>
                                            <div className={Styles.testimonialImg}>
                                                <img src={testimonial.image} alt={testimonial.alt} />
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>

                            <button onClick={handleNext} className={`${Styles.arrow} ${Styles.next}`}></button>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}