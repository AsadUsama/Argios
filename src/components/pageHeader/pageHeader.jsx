import Styles from './pageHeader.module.scss';


export default function PageHeader({ heading }) {

    return (
        <div className={Styles.headerBg}>
            <div className="container">
                <div className="row">
                    <div className={Styles.headerWrap}>
                        <h1 className={Styles.pageHeading}>{heading}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}