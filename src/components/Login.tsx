import { signIn } from 'next-auth/client';

import styles from '../styles/components/Login.module.css';

export function Login() {
    const handleSignin = (e) => {
        e.preventDefault();
        signIn();
    }   

    return (
        <div className={styles.login}>
            <div className={styles.symbol}>
                <img src="/icons/symbol.svg" alt="Simbolo"/>
            </div>
            
            <div className={styles.loginBox}>
                <img src="/icons/logoLogin.svg" alt="Logo"/>
                <strong>
                    Bem-vindo
                    <img src="/icons/git.svg" alt="Git-Hub"/>
                </strong>

                <a 
                    href="#"
                    onClick={handleSignin}
                >
                    Entrar com GitHub
                </a>
            </div>
        </div>
    );   
}