import Styles from './ProjectCard.module.scss';

export default function ProjectCard({
    image,
    alt,
    title,
    href = '#'
}) {
    return (
        <a
            href={href}
            className={Styles.projectCard}
        >
            <img
                src={image}
                alt={alt}
                className={Styles.projectImage}
            />
            <h3 className={Styles.projectTitle}>{title}</h3>
        </a>
    );
}