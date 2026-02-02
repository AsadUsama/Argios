import Styles from './footerOne.module.scss';
import logoFoot from '../../assest/logo/logoFoot.png';
import SocialIcons from '../socialIcons/socialIcon';

export default function FootOne() {
    return (
        <div className={Styles.footOne}>
            <img src={logoFoot} alt="Footer Logo" />
            <p>There are many variations of passages
                of lorem ipsum available, but the
                majority suffered.</p>
            <SocialIcons variant="dark" size={18} />

        </div>
    )

}
