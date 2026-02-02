import styles from "./contactCards.module.scss";

const cards = [
    {
        id: 1,
        title: "About",
        text: [
            "Lorem ipsum is simply free text used by copytypin refreshing.",
            "Neque porro est qui"
        ],
        bg: "primary"
    },
    {
        id: 2,
        title: "Contact",
        text: [
            "+1- (246) 333-0079",
            "support@agrios.com",
            "Mon - Fri: 7:00 am - 6:00 pm"
        ],
        bg: "tertiary"
    },
    {
        id: 3,
        title: "Address",
        text: [
            "66 Broklyn Road Golden Street,",
            "New Your United States of America"
        ],
        bg: "secondary"
    }
];
export default function ContactCards() {

    return (
        <section className="container">
            <div className="row">
                <div className={styles.cardsSection}>
                    {cards.map((card) => (
                        <div key={card.id} className={`${styles.card} ${styles[card.bg]}`}>
                            <h3 className={styles.title}>{card.title}</h3>
                            {card.text.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

