import twitter from '../../assest/icons/twitter.svg';
import facebook from '../../assest/icons/facebook.svg';
import pinterest from '../../assest/icons/pinterest.svg';
import instagram from '../../assest/icons/instagram.svg';
import styles from './socialIcon.module.scss'

export default function SocialIcons({ size = 14, variant = 'light' }) {
    const socialLinks = [
        { icon: twitter, url: 'https://twitter.com', name: 'Twitter' },
        { icon: facebook, url: 'https://facebook.com', name: 'Facebook' },
        { icon: pinterest, url: 'https://pinterest.com', name: 'Pinterest' },
        { icon: instagram, url: 'https://instagram.com', name: 'Instagram' }
    ];

    return (
        <div className={styles.socialIcons}>
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.iconLink} ${styles[`link${variant}`]}`}
                >
                    <img
                        src={social.icon}
                        alt={social.name}
                        width={size}
                        height={size}
                        className={`${styles.icon} ${styles[`img${variant}`]}`}
                    />
                </a>
            ))}
        </div>
    );
}
