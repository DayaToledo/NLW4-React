import Head from 'next/head';
import { useSession } from 'next-auth/client';

import { Login } from '../components/Login';
import Challenge from './challenge';

export default function Home() {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Login | move it</title>
      </Head>

      { !session ? (
        <Login/>
      ) : (    
        <Challenge/>
      )}
    </>
  );
}