import Styles from './footerThree.module.scss';
import FooterHeading from '../FooterHeading/footerHeading';



function NewsItem() {

    const newsArticle = [
        { title: 'Bringing Food Production Back To Cities', date: 'July, 5, 2025', herf: '#' },
        { title: 'The Future of Farming, Smart Irrigation Solutions', date: 'May 26, 2025', herf: '#' }
    ];

    return (
        <div className={Styles.newsItems}>
            {newsArticle.map((item) => (
                <a href={item.herf} key={item.title} className={Styles.newsLink}>
                    <h5>{item.title}</h5>
                    <p>{item.date}</p>
                </a>
            ))}
        </div>

    );
}

export default function FootThree() {
    return (
        <div className={Styles.footThree}>
            <FooterHeading text={"News"} />
            <NewsItem />
        </div>

    )
}