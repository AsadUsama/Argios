import Styles from './sponserBar.module.scss'

const sponsers = [
    {
        id: 1,
        name: 'Organic Wheat',
        src: '/src/assest/sponsers/sponserOne.png',
        alt: 'Organic Wheat',
    },
    {
        id: 2,
        name: 'Agriculture Natural',
        src: '/src/assest/sponsers/sponserTwo.png',
        alt: 'Agriculture Natural',
    },
    {
        id: 3,
        name: 'FERM Agriculture',
        src: '/src/assest/sponsers/sponserThree.png',
        alt: 'FERM Agriculture',
    },
    {
        id: 4,
        name: 'Natural Rices',
        src: '/src/assest/sponsers/sponserFour.png',
        alt: 'Natural Rices',
    },
    {
        id: 5,
        name: 'Agric',
        src: '/src/assest/sponsers/sponserFive.png',
        alt: 'Agric',
    },
    {
        id: 6,
        name: 'Agric',
        src: '/src/assest/sponsers/sponserTwo.png',
        alt: 'Agric',
    },
];

export default function Sponser() {


    return (
        <div className={Styles.sponserBg}>
            <div className="container">
                <div className={`row`}>
                    <div className={Styles.sponserBar}>
                        {sponsers.map((sponser) => (

                            <img src={sponser.src} alt={sponser.alt} />
                        ))}

                    </div>

                </div>
            </div>
        </div>
    )

}