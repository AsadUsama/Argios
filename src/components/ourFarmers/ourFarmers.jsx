import Styles from "./ourFarmers.module.scss";
import SectionHeading from "../sectionHeading/sectionHeading";
import farmerOne from "../../assest/cards/farmerOne.png";
import farmerTwo from "../../assest/cards/farmerTwo.png";
import farmerThree from "../../assest/cards/farmerThree.png";
const farmers = [
    {
        id: 1,
        src: farmerOne,
        href: '#',
        alt: 'Farmer Background Image',
        name: 'Kevin Smith',
        title: 'Farmer'
    },
    {
        id: 2,
        src: farmerTwo,
        href: '#',
        alt: 'Farmer Background Image',
        name: 'Jessica Brown',
        title: 'Farmer'
    },
    {
        id: 3,
        src: farmerThree,
        href: '#',
        alt: 'Farmer Background Image',
        name: 'David Martin',
        title: 'Senior Farmer'
    }
];



export default function Farmers() {

    return (
        <div className="container">

            <SectionHeading
                miniHeading="Team Members"
                mainHeading="Meet Our Farmers"
            />
            <div className="row">
                <div className={Styles.farmerSection} id="ourFarmers">
                    {farmers.map((farmer) => (

                        <div key={farmer.id} className={Styles.farmerCard}>
                            <img src={farmer.src} alt={farmer.alt} />
                            <div className={Styles.farmerData}>
                                <a href={farmer.href}>{farmer.name}</a>
                                <p>{farmer.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}