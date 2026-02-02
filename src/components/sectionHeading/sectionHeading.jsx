import Styles from './sectionHeading.module.scss';


export default function sectionHeading({ miniHeading, mainHeading }) {
    return (

        <div className="row" >
            <div className={Styles.headingWrap}>
                <h4>{miniHeading}</h4>
                <h1>{mainHeading}</h1>
            </div>
        </div >
    )
}

