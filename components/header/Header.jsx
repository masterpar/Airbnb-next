import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"


function Header() {
    return (
        <div>
            <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2">
                {/*left*/}
                <div className="flex  items center reltive cursor-pointer my-auto px-4
                                md:px-10">
                    <Image
                        src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
                        alt=""
                        width={100}
                        height={90}
                        className="hidden md:inline-flex"
                    />
                        <Image
                            src="https://cdn.worldvectorlogo.com/logos/airbnb-1.svg"
                            alt=""
                            width={40}
                            height={40}
                            className="md:hidden"
                        />
                </div>


                {/*middle search*/}
                <div className="flex items-center justify-between
                                border-2 rounded-full py-2 shadow-md">
                    <input
                        className="pl-3 bg-transparent text-sm text-gray-400 outline-none"
                        type="text"
                        placeholder="Start your search"
                    />
                    <MagnifyingGlassIcon
                        className="h-6 hidden md:inline-flex bg-red-400 text-white
                                    rounded-full p-1 cursor-pointer mr-3 "
                    />
                </div>

                {/*Right*/}

                <div> </div>
            </header>
        </div>
    )
}

export default Header;
