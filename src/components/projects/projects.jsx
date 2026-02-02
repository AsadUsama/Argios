import Styles from './projects.module.scss';
import Heading from '../sectionHeading/sectionHeading';
import ProjectCard from '../common/projectCard/projectCard';
import projectOne from "../../assest/cards/projectOne.png";
import projectThree from "../../assest/cards/projectThree.png";
import projectFour from "../../assest/cards/projectFour.png";
import projectTwo from "../../assest/cards/projectPageThree.png";



export const homeProjects = [
    {
        id: 1,
        image: projectOne,
        alt: 'Easy Harvesting',
        title: 'Easy Harvesting',
        href: '#'
    },
    {
        id: 2,
        image: projectTwo,
        alt: 'Agriculture Farming',
        title: 'Agriculture Farming',
        href: '#'
    },
    {
        id: 3,
        image: projectThree,
        alt: 'Ecological Farming',
        title: 'Ecological Farming',
        href: '#'
    },
    {
        id: 4,
        image: projectFour,
        alt: 'Organic Solutions',
        title: 'Organic Solutions',
        href: '#'
    }
];

function HomeProject() {
    return (
        <div className="row">
            <div className={Styles.homeProjectsGrid}>
                {homeProjects.map((project) => (
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
    )
}

export default function Projects() {
    return (
        <div className="container">
            <Heading
                miniHeading="Recently Completed"
                mainHeading="Explore Projects"
            />
            <HomeProject />

            {/* <div className="row">
                <div className={Styles.projectWrapper}>
                    {projects.map((project) => (
                        <a className={Styles.project} key={project.key}>
                            <img src={project.src} alt="" />
                            <div className={Styles.projectText}>
                                <h3>{project.text}</h3>
                            </div>

                        </a>
                    ))}
                </div>
            </div> */}
        </div>
    )
}