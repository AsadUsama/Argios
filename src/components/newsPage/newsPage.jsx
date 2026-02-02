import Styles from "./newsPage.module.scss"
import NewsCard from "../common/newsCard/newsCard"
import newsPageOne from "../../assest/cards/newsPageOne.png"
import newsPageTwo from "../../assest/cards/newsPageTwo.png"
import newsPageThree from "../../assest/cards/newsPageThree.png"
import newsPageFour from "../../assest/cards/newsPageFour.png"
import newsPageFive from "../../assest/cards/newsPageFive.png"
import newsPageSix from "../../assest/cards/newsPageSix.png"


const newsData = [
    {
        id: 1,
        to: "3",
        image: newsPageOne,
        alt: "Bringing Food Production Back To Cities",
        date: "March 12, 2025",
        author: "David Green",
        commentsCount: 3,
        title: "Bringing Food Production Back To Cities"
    },
    {
        id: 2,
        to: "3",
        image: newsPageTwo,
        alt: "The Future of Farming, Smart Irrigation Solutions",
        date: "April 05, 2025",
        author: "Sophia Lane",
        commentsCount: 5,
        title: "The Future of Farming, Smart Irrigation Solutions"
    },
    {
        id: 3,
        to: "3",
        image: newsPageThree,
        alt: "Agronomy and relation to Other Sciences",
        date: "May 21, 2025",
        author: "Michael Brown",
        commentsCount: 2,
        title: "Agronomy and relation to Other Sciences"
    },
    {
        id: 4,
        to: "3",
        image: newsPageFour,
        alt: "We grow products with the organic farming",
        date: "June 14, 2025",
        author: "Olivia Smith",
        commentsCount: 4,
        title: "We grow products with the organic farming"
    },
    {
        id: 5,
        to: "3",
        image: newsPageFive,
        alt: "A Quick Solution to Low Milk Production in Zimbabwe",
        date: "July 02, 2025",
        author: "Ethan Davis",
        commentsCount: 1,
        title: "A Quick Solution to Low Milk Production in Zimbabwe"
    },
    {
        id: 6,
        to: "3",
        image: newsPageSix,
        alt: "Winter wheat harvest organic gather nice moment",
        date: "August 27, 2025",
        author: "Emma Wilson",
        commentsCount: 6,
        title: "Winter wheat harvest organic gather nice moment"
    }
];


export default function NewsPage() {

    return (
        <div className="container">
            <div className="row">
                <div className={Styles.newsWrapper}>
                    {newsData.map((news) => (
                        <NewsCard
                            to={news.to}
                            key={news.id}
                            image={news.image}
                            date={news.date}
                            author={news.author}
                            commentsCount={news.commentsCount}
                            alt={news.alt}
                            title={news.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}