import Styles from './infoContact.module.scss';
import phone from '../../assest/icons/phone.svg';
import mail from '../../assest/icons/mail.svg';
import location from '../../assest/icons/location.svg';

export default function NavbarContact() {

    const contactData = [
        {
            icon: phone,
            label: 'Call anytime',
            text: '+ 98 (000) - 9630',
            alt: 'Phone icon',
            size: 30,
            href: 'tel:+980009630'
        },
        {
            icon: mail,
            label: 'Send email',
            text: 'ambed@agrios.com',
            alt: 'Email icon',
            size: 30,
            href: 'mailto:ambed@agrios.com'
        },
        {
            icon: location,
            label: '380 St Kilda Road',
            text: 'Melbourne, Australia',
            alt: 'Location icon',
            size: 23,
            href: 'https://maps.google.com/?q=380 St Kilda Road Melbourne, Australia'
        }
    ]

    return (

        <div className={Styles.socialBar}>
            {contactData.map((contact) => (
                <div className={Styles.socialWrapper}>
                    <img className={Styles.socialIcon} src={contact.icon} alt="" width={contact.size} />
                    <div className={Styles.socialText}>
                        <p>{contact.label}</p>

                        <a href={contact.href} target='_blank' rel="noopener noreferrer">{contact.text}</a>
                    </div>
                </div>
            ))}
        </div>
    )
};