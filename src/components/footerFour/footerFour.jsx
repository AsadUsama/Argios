import Styles from './footerFour.module.scss';
import FooterHeading from '../FooterHeading/footerHeading';
import Phoneicon from '../../assest/icons/phone.svg';
import MailIcon from '../../assest/icons/mail.svg';
import LocationIcon from '../../assest/icons/location.svg';
import PlaneIcon from '../../assest/icons/plane.svg';

function ContactItem() {
    const contactDetails = [
        {
            type: 'Phone',
            value: '666 888 0000',
            icon: Phoneicon,
            href: 'tel:6668880000',
            target: "_self"
        },

        {
            type: 'Email',
            value: 'needhelp@company.com',
            icon: MailIcon,
            href: 'mailto:needhelp@company.com',
            target: "_blank"
        },

        {
            type: 'Address',
            value: '80 broklyn golden street line New York, USA',
            icon: LocationIcon,
            href: "https://www.google.com/maps?q=80+Brooklyn+Golden+Street+New+York",
            target: "_blank"
        },
    ];

    return (
        <ul className={Styles.contactItems}>
            {contactDetails.map((item) => (
                <li className={`${Styles.contactItem} ${Styles[item.type.toLowerCase()]}`} key={item.type}>
                    <a href={item.href} target={item.target}>{item.value}</a>
                </li>
            ))}
        </ul>
    )


}

export default function FootFour() {
    return (
        <div className={Styles.footFour}>
            <FooterHeading text={"Contact"} />
            <ContactItem />
            <div className={Styles.inputImg}>
                <input type="text" className={Styles.inputField} placeholder='Enter Your Email' />
                <button><img src={PlaneIcon} alt="" /></button>
            </div>
        </div>
    );
}

