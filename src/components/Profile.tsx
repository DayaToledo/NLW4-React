import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="Dayana.jpg" alt="Dayana Toledo"/>
            <div>
                <strong>Dayana Toledo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}