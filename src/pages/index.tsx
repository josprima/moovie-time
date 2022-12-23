import Navbar from '@components/navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MoovieTime</title>
        <meta name="description" content="MoovieTime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </>
  );
}
