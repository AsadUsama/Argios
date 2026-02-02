import { Link, NavLink } from 'react-router-dom';
import mainLogo from '../../assest/logo/mainLogo.png';
import miniLogo from '../../assest/logo/miniLogo.png';

export default function Logo({ variant = 'main', logoStyle = '' }) {

    return (

        <NavLink to="/">
            <img
                src={variant === 'main' ? mainLogo : miniLogo}
                alt={variant === 'main' ? "Main Logo" : 'Mini Logo'}
                className={logoStyle}
            />
        </NavLink>
    )

}