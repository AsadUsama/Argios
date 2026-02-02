import { useState, useEffect, useRef } from 'react';
import styles from './infoBar.module.scss';
import Logo from '../logo/logo'
import SocialIcons from '../socialIcons/socialIcon';
import Navcontact from '../infoContact/infoContact';
import burger from "../../assest/icons/burgerIcon.svg";
import Navlinks from '../navBar/navLinks';



export default function InfoBar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    function handleClick() {
        setMenuOpen(prev => !prev);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if click is outside menu AND outside burger button
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        }

        // Only add listener if menu is open
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);


    return (
        <div className='container'>
            <div className={`row`}>
                <div className={styles.rowInfo}>
                    <Logo logoStyle={styles.logo} />

                    <div className={styles.social}>
                        <SocialIcons variant='light' size={18} />
                    </div>

                    <Navcontact />
                    <button
                        ref={burgerRef}
                        onClick={handleClick}
                        className={styles.burger}
                    >
                        <img src={burger} alt="Burger Menu" width="40px" height="40px" />
                    </button>


                </div>
            </div>
            <div
                ref={menuRef}
                className={`${styles.menu} ${menuOpen ? styles.menuOpen : styles.menuClosed}`}
            >
                <Navlinks variant='menu' onLinkClick={closeMenu} />
            </div>

        </div>
    )
}