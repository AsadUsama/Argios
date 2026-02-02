import Styles from './projectPage.module.scss';
import ProjectCard from "../common/projectCard/projectCard";
import projectPageOne from "../../assest/cards/projectPageOne.png";
import projectPageTwo from "../../assest/cards/projectPageTwo.png";
import projectPageThree from "../../assest/cards/projectPageThree.png";
import projectPageFour from "../../assest/cards/projectPageFour.png";
import projectPageFive from "../../assest/cards/projectPageFive.png";
import projectPageSix from "../../assest/cards/projectPageSix.png";

const projectsData = [
    {
        id: 1,
        image: projectPageOne,
        alt: 'Easy Harvesting',
        title: 'Easy Harvesting',
        href: "#"
    },
    {
        id: 2,
        image: projectPageTwo,
        alt: 'Agriculture Farming',
        title: 'Agriculture Farming',
        href: "#"
    },
    {
        id: 3,
        image: projectPageThree,
        alt: 'Ecological Farming',
        title: 'Ecological Farming',
        href: "#"
    },
    {
        id: 4,
        image: projectPageFive,
        alt: 'Organic Products',
        title: 'Organic Solutions',
        href: "#"
    },
    {
        id: 5,
        image: projectPageFour,
        alt: 'Modern Agriculture',
        title: 'Modern Agriculture',
        href: "#"
    },
    {
        id: 6,
        image: projectPageSix,
        alt: 'Natural Farming',
        title: 'Natural Farming',
        href: "#"
    }
];

export default function Projects() {

    // const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;


    return (

        <div className="container">
            <div className="row">
                <div className={Styles.projectsGrid}>
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            alt={project.alt}
                            title={project.title}
                            href={project.href}
                        />
                    ))}
                </div>
            </div>
        // </div>
    );
}