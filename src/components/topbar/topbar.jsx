import styles from "./topbar.module.scss"

export default function Bar() {
    return (
        <div className={`${styles.bar}`}>
            <div className={styles.colorOne}> </div>
            <div className={styles.colorTwo}> </div>
            <div className={styles.colorThree}> </div>
        </div >
    )
}