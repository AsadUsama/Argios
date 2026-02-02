import { href, Link } from 'react-router-dom'
import Styles from './footerTwo.module.scss';
import FooterHeading from '../FooterHeading/footerHeading';


const footerLinks = [
    { id: 'about', label: 'About', href: '/about' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'projects', label: 'Our project', href: '/projects' },
    { id: 'farmers', label: 'Meet the Farmers', href: '/about#ourFarmers' },
    { id: 'news', label: 'Latest News', href: '/news' },
    { id: 'contact', label: 'Contact', href: '/contact' },
];

function FooterLinks() {
    return (
        <ul>
            {footerLinks.map(item => (
                <li key={item.id}>
                    <Link to={item.href} title={item.label}>{item.label}</Link>
                </li>
            ))}
        </ul>
    );
}


export default function FootTwo() {
    return (
        <div className={Styles.footTwo}>
            <FooterHeading text={'Explore'} />
            <FooterLinks />
        </div>
    )
}
