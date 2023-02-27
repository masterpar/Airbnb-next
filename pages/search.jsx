import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {useRouter} from "next/router";
import { format } from "date-fns"

function Search() {

    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query

    const formattedStarDate = format(new Date(startDate), 'dd-MMM-yyy')
    const formattedEndDate = format(new Date(endDate), 'dd-MMM-yyy')

    const range = `${formattedStarDate} - ${formattedEndDate}`

    return (
        <div>
            <Header/>
            <main className="flex">
                <section className="flex-grow font-Unbounded ml-6">
                    <p className=" font-light text-xs mt-12 text-gray-700">
                        300+ stays {range} for {noOfGuests} guets
                    </p>
                    <h1 className="text-3xl font-semibold mt-1 capitalize ">
                        Stays in { location }
                    </h1>

                    <div className="hidden lg:inline-flex space-x-3 mt-2 text-gray-700 text-sm">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                </section>

            </main>
            <Footer/>
            
        </div>
    )
}

export default Search;
