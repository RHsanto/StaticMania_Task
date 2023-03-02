import HomePage from '@/components/Home/Home'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <HomePage/>
    </>
  )
}
