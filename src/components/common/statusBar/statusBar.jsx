import { Link } from 'react-router-dom';
import Styles from './statusBar.module.scss';


const statusData = [
    {
        key: 1,
        text: 'Agriculture Products',
        href: '/shop'
    },
    {
        key: 2,
        text: 'Project Completed',
        href: '/projects'
    },
    {
        key: 3,
        text: 'Satisfied Clients',
        href: '#testimonials'
    },
    {
        key: 4,
        text: 'Expert Farmers',
        href: '/about#ourFarmers'
    }
]




export default function StatusBarMain({
    statusBg,
    statusDataWrap
}) {



    return (
        <div className={`${Styles.status} ${statusBg}`}>
            <div className="container">
                <div className="row">
                    <div className={`${Styles.statusWrapMain} ${statusDataWrap}`}>
                        {statusData.map((status) => (
                            <div className={Styles.dataWrapMain} key={status.key}>
                                <Link to={status.href}>
                                    {status.text}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}