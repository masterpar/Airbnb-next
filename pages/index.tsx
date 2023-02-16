import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
// import Banner from '../components/banner/Banner'

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
        <Banner/>
        {/*<Banner/>*/}

    </div>

  )
}

export default Home
