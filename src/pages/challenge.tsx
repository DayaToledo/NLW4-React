import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import { CountdownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengesContext';

import styles from '../styles/pages/Home.module.css'
import { SideBar } from '../components/SideBar';

interface ChallengeProps {
    level: number,
    currentExperience: number,
    challengeCompleted: number
}

export default function Challenge(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience} 
      challengeCompleted={props.challengeCompleted}
    >
        <Head>
          <title>Challenge | move it</title>
        </Head>

        <div className={styles.container}>
            <SideBar isChallengeValue={true}/>

            <ExperienceBar/>
            
            <CountdownProvider>
              <section>
                <div>
                  <Profile/>
                  <CompletedChallenges/>
                  <Countdown/>
                </div>
                <div>
                  <ChallengeBox/>
                </div>
              </section>
            </CountdownProvider>
        </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}