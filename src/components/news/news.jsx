import Styles from './news.module.scss'
import Heading from '../sectionHeading/sectionHeading'
// import newsOne from '../../assest/cards/newsOne.png'
// import { Link } from 'react-router-dom'
import NewsCard from "../common/newsCard/newsCard"
import newsOne from "../../assest/cards/newsOne.png"
import newsTwo from "../../assest/cards/newsTwo.png"
import newsThree from "../../assest/cards/newsThree.png"



const newsDataTwo = [
    {
        id: 1,
        to: "/news",
        image: newsOne,
        alt: "Bringing Food Production Back To Cities",
        date: "September 10, 2025",
        author: "Liam Carter",
        commentsCount: 4,
        title: "Bringing Food Production Back To Cities"
    },
    {
        id: 2,
        to: "/news",
        image: newsTwo,
        alt: "The Future of Farming, Smart Irrigation Solutions",
        date: "September 24, 2025",
        author: "Ava Johnson",
        commentsCount: 2,
        title: "The Future of Farming, Smart Irrigation Solutions"
    },
    {
        id: 3,
        to: "/news",
        image: newsThree,
        alt: "Agronomy and relation to Other Sciences",
        date: "October 8, 2025",
        author: "Noah Edwards",
        commentsCount: 5,
        title: "Agronomy and relation to Other Sciences"
    }
];

export default function News() {
    return (
        <div className="container">
            <Heading
                miniHeading="From the Blog"
                mainHeading="News & Articles" />

            <div className="row">
                <div className={Styles.newsWrap}>
                    {newsDataTwo.map((news) => (
                        <NewsCard
                            to={news.to}
                            id={news.id}
                            image={news.image}
                            alt={news.alt}
                            date={news.date}
                            author={news.author}
                            commentsCount={news.commentsCount}
                            title={news.title} />
                    ))}
                </div>
            </div>
            {/* <div className="row">
                <div className={Styles.newsWrap}>

                    {newsData.map((data) => (

                        <Link to='/news' className={Styles.newsContainer} key={data.id}>

                            <div className={Styles.newsImages}>
                                <img className={Styles.newsImg} src={newsOne} alt="News image" />
                                <p className={Styles.newsDate}>{data.date}</p>
                            </div>

                            <div className={Styles.newsContent}>
                                <div className={Styles.mataData}>
                                    <p className={Styles.name}>{data.name}</p>
                                    <p className={Styles.comment}>
                                        {data.comments} {data.comments === 1 ? 'comment' : 'comments'}
                                    </p>
                                </div>
                                <div className={Styles.newsHeading}>
                                    <h2>
                                        {data.heading}
                                    </h2>
                                </div>
                            </div>

                        </Link>
                    ))}

                </div>
            </div> */}
        </div>
    )
}