import { useSession } from 'next-auth/client';
import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const [session] = useSession();
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            {session &&
                <>
                    <img src={session.user.image} alt="Imagem do perfil"/>
                    <div>
                        <strong>{session.user.name ?? session.user.email}</strong>
                        <p>
                            <img src="icons/level.svg" alt="Level"/>
                            Level {level}
                        </p>
                    </div>
                </>
            }
        </div>
    );
}