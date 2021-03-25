import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { SideBar } from '../components/SideBar';

export default function Challenge() {
  return (
    <>
      <Head>
        <title>Ranking | move it</title>
      </Head>

      <div className={styles.container}>
          <SideBar isChallengeValue={false}/>
      </div>
    </>
  );
}