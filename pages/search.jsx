import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useRouter} from "next/router";
import { format } from "date-fns"
import InforCard from "../components/cards/InforCard";
import Map from "../components/mapbox/Map";

function Search( { searchResults}) {

    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query

    const formattedStarDate = format(new Date(startDate), 'dd-MMM-yyy')
    const formattedEndDate = format(new Date(endDate), 'dd-MMM-yyy')

    const range = `${formattedStarDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={ `${location} | ${range} | ${noOfGuests} guests` } />
            <main className="flex grid lg:grid-cols-2 ">

                {/*Cards*/}
                <section className="font-Unbounded ">
                    <p className=" font-light text-xs mt-12 text-gray-700 pl-6">
                        300+ stays {range} for {noOfGuests} guets
                    </p>
                    <h1 className="text-3xl font-semibold mt-1 capitalize pl-6 ">
                        Stays in { location }
                    </h1>

                    <div className="hidden 2xl:inline-flex space-x-3 mt-2 text-gray-700 text-sm pl-6">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col mt-7 mx-4 ">
                        { searchResults.map(place => (
                            <InforCard key={place.img} {...place}/>
                        ))}
                    </div>
                </section>

                {/*Map*/}
                <section className="hidden lg:inline-flex pl-12 lg:m-w-[500px]  lg:max-h-[1500px] ">
                    <Map searchResults={searchResults}/ >
                </section>

            </main>
            <Footer/>
            
        </div>
    )
}

export default Search;


export async function getServerSideProps(){
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
        .then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}
