import Styles from './bottomBar.module.scss';


export default function BottomBar() {
    return (
        <div className={Styles.bgbottom}>
            <div className="container">
                <div className={`row ${Styles.bottomBar}`}>
                    <p>&copy; All Copyright 2024 by shawonetc Themes</p>
                    <div className={Styles.policy}>
                        <a>Terms of use</a>
                        <a>Privicy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}