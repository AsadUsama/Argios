// import { Link, NavLink } from 'react-router-dom';
// import Styles from './navLinks.module.scss';

// export default function Navlinks() {
//     const pages = [
//         { id: '1', name: 'Home', url: '' },
//         { id: '2', name: 'About', url: '/about' },
//         { id: '3', name: 'Services', url: '/Services' },
//         { id: '4', name: 'Projects', url: '/Projects' },
//         { id: '5', name: 'News', url: '/News' },
//         { id: '6', name: 'Shop', url: '/Shop' },
//         { id: '7', name: 'Contact', url: '/contact' },
//     ]

//     return (

//         <div className={Styles.navlink}>
//             {pages.map((page) => (


//                 <NavLink
//                     to={page.url}
//                     key={page.id}
//                     className={({ isActive }) => `${Styles.nav} ${isActive ? Styles.activeLink : Styles.navAnchor}`
//                     }
//                     end>{page.name}
//                 </NavLink>

//             ))}
//         </div>

//     )
// }


import { Link, NavLink } from 'react-router-dom';
import Styles from './navLinks.module.scss';

export default function Navlinks({ variant = "navbar", onLinkClick }) {
    const pages = [
        { id: '1', name: 'Home', url: '' },
        { id: '2', name: 'About', url: '/about' },
        { id: '3', name: 'Services', url: '/Services' },
        { id: '4', name: 'Projects', url: '/Projects' },
        { id: '5', name: 'News', url: '/News' },
        { id: '6', name: 'Shop', url: '/Shop' },
        { id: '7', name: 'Contact', url: '/contact' },
    ]

    return (

        <div className={variant === "menu" ? Styles.navlinkMenu : Styles.navlink}>
            {pages.map((page) => (


                <NavLink
                    to={page.url}
                    key={page.id}
                    onClick={onLinkClick}
                    className={({ isActive }) =>
                        variant === "menu"
                            ? `${Styles.navMenu} ${isActive ? Styles.activeLinkMenu : Styles.navAnchorMenu}`
                            : `${Styles.nav} ${isActive ? Styles.activeLink : Styles.navAnchor}`
                    }
                    end>{page.name}
                </NavLink>

            ))}
        </div>

    )
}