import Link from 'next/Link';

import styles from '../styles/components/SideBar.module.css';

export function SideBar(props) {
    return (
        <nav className={styles.sideBar}>
            <img src="/icons/logo.svg" alt="Logo"/>

            { props.isChallengeValue ? (
                <>
                    <Link href="/challenge">
                        <a className={styles.pageSelected}><img src="/icons/homeSelected.svg" alt="Tela inicial"/></a>
                    </Link>
                    <Link href="/ranking">
                        <a><img src="/icons/ranking.svg" alt="Tela Ranking"/></a>
                    </Link>
                </>
            ):(
                <>
                    <Link href="/challenge">
                        <a><img src="/icons/home.svg" alt="Tela inicial"/></a>
                    </Link>
                    <Link href="/ranking">
                        <a className={styles.pageSelected}><img src="/icons/rankingSelected.svg" alt="Tela Ranking"/></a>
                    </Link>
                </>
            )}
        </nav>
    );
}