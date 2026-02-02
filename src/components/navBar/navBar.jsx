import NavLinks from './navLinks';
import Styles from "./navBar.module.scss";
import Search from '../searchIcon/searchIcon';
import Cart from '../cartIcon/cartIcon'


export default function Navbar() {
    return (
        <div className={Styles.nav}>
            <div className='container' >
                <div className={`row ${Styles.navRow}`}>
                    <NavLinks />
                    <div className={Styles.navIconWrap}>
                        <Search />
                        <Cart />

                    </div>
                </div>
            </div>
        </div>
    )
}

