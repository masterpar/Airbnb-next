// import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import SmallCard from "../components/cards/SmallCard";
import MediumCard from "../components/cards/MediumCard";
import LargeCard from "../components/cards/LargeCard";
import Footer from "../components/footer/Footer";
// import Banner from '../components/banner/Banner'

const Home = ({ exploreData, cardsData }) => {


  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/*Header*/}
        <Header/>

        {/*Banner*/}
        <Banner
            tags='new hosts'
            webformatURL={cardsData.hits[Math.floor(Math.random()*cardsData.hits.length)].webformatURL}
        />

        <main className="max-w-7xl xl:mx-auto mx-6">
            {/*explore Nearby*/}
            <section className="mt-14 ">
                <h2 className="text-4xl font-medium font-Unbounded pb-5">Explore Nearby</h2>

                {/*pull some data form a server - API endpoints*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">

                    { exploreData?.hits.slice(0,8).map(({id, tags, webformatURL, likes}) => (
                        <SmallCard
                            key={id}
                            tags={tags}
                            webformatURL={webformatURL}
                            likes={likes}
                        />
                    ))}
                </div>
            </section>

            {/*Live Anywhere*/}
            <section>

                <h2 className="text-4xl font-medium font-Unbounded pb-5 mt-14">Live Anywhere</h2>

                <div className="flex space-x-3 overflow-scroll scrollbar-hide md:scrollbar-default -ml-5">

                    { cardsData?.hits.slice(0,8).map(({id, tags, webformatURL, likes}) => (
                        <MediumCard
                            key={id}
                            tags={tags}
                            webformatURL={webformatURL}
                            likes={likes}
                        />
                    ))}
                </div>
            </section>

            {/*card*/}
            <section>
                <LargeCard
                   tags='new hosts'
                   webformatURL={cardsData.hits[12].webformatURL}
                   likes='32'
                />

            </section>
        </main>

        {/*footer*/}
        <Footer />

    </div>

  )
}

export async function getStaticProps(){

    const exploreData = await fetch(`https://pixabay.com/api/?key=${process.env.pixabay_key}&q=hotels&image_type=photo`)
                        .then( (response => response.json()))

    const cardsData = await fetch(`https://pixabay.com/api/?key=${process.env.pixabay_key}&q=ciudades&image_type=photo`)
                        .then( (response => response.json()))
        return {
            props: {
                exploreData,
                cardsData
            }
        }
}





export default Home
