import Styles from "./servicesSponser.module.scss";


const sponsers = [
    {
        id: 1,
        name: 'Organic Wheat',
        src: '/src/assest/sponsers/sponser_one.png',
        alt: 'Organic Wheat',
    },
    {
        id: 2,
        name: 'Agriculture Natural',
        src: '/src/assest/sponsers/sponser_two.png',
        alt: 'Agriculture Natural',
    },
    {
        id: 3,
        name: 'FERM Agriculture',
        src: '/src/assest/sponsers/sponser_three.png',
        alt: 'FERM Agriculture',
    },
    {
        id: 4,
        name: 'Natural Rices',
        src: '/src/assest/sponsers/sponser_four.png',
        alt: 'Natural Rices',
    },
    {
        id: 5,
        name: 'Agric',
        src: '/src/assest/sponsers/sponser_five.png',
        alt: 'Agric',
    },
    {
        id: 6,
        name: 'Agric',
        src: '/src/assest/sponsers/sponser_two.png',
        alt: 'Agric',
    },
];

export default function ServicesSponser() {
    return (
        <div className={Styles.sponserBg}>
            <div className="container">
                <div className="row">
                    <div className={Styles.sponsers}>
                        {sponsers.map((sponser) => (

                            <div key={sponser.id} className={Styles.sponser}>
                                <img src={sponser.src} alt={sponser.alt} />
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}