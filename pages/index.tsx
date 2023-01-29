import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/*Header*/}
        <Header/>
        {/*Banner*/}


    </div>

  )
}

export default Home
