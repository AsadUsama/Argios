import Styles from './footer.module.scss';
import FootOne from '../footerOne/footerOne';
import FootTwo from '../footerTwo/footerTwo';
import FootThree from '../footerThree/footerThree';
import FootFour from '../footerFour/footerFour';

export default function Footer() {

    return (
        <div className={Styles.footer}>
            <section className='container'>
                <div className={`row`}>
                    <div className={Styles.footercontent}>
                        <FootOne />
                        <FootTwo />
                        <FootThree />
                        <FootFour />
                    </div>
                </div>
            </section>
        </div>
    );
}

