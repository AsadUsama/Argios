import { Link } from 'react-router-dom';
import Styles from './newsCard.module.scss';



export default function NewsCard({
    to = '#',
    image,
    alt,
    date,
    author,
    commentsCount,
    title
}) {
    return (
        <div className={Styles.wrapper}>
            <Link to={to} className={Styles.newsCard}>
                <div className={Styles.imageWrapper}>
                    <img src={image} alt={alt} className={Styles.image} />
                </div>

                <div className={Styles.content}>
                    <span className={Styles.date}>{date}</span>
                    <div className={Styles.meta}>
                        <span className={Styles.author}>
                            {author}
                        </span>
                        <span className={Styles.comments}>
                            {commentsCount} {commentsCount === 1 ? 'Comment' : 'Comments'}
                        </span>
                    </div>

                    <h3 className={Styles.title}>{title}</h3>
                </div>
            </Link>
        </div>
    );
}