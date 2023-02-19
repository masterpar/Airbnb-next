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

        <main className="max-w-7xl xl:mx-auto mx-6">
            <section className="mt-6">
                <h2 className="text-4xl font-medium font-Unbounded pb-5">Explore Nearby</h2>
            </section>
        </main>

    </div>

  )
}

export default Home
