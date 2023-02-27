import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Search() {
    return (
        <div>
            <Header/>
            <main className="flex">
                <section className="flex-grow font-Unbounded ml-6">
                    <p className=" font-light text-xs mt-12 text-gray-500">
                        300 + stays for 5 number of guets
                    </p>
                    <h1 className="text-3xl font-semibold mt-1">
                        Stays in New York
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
