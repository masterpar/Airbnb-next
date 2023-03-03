import {useState} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

import DateRange from "./DateRange";


function HeaderCenter({ placeholder }) {

    const [searchInput, setSearchInput] = useState('');

    return (
        <div>
            <div className="flex items-center justify-between
                            border-b-2 rounded-full py-2 hover:shadow-md">
                <input
                    className="pl-3 bg-transparent text-[12px] font-Unbounded font-extralight
                                text-gray-400 outline-none w-full capitalize"
                    type="text"
                    placeholder={placeholder || 'Start your search'}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <MagnifyingGlassIcon
                    className="h-6 hidden md:inline-flex bg-red-400 text-white
                                        rounded-full p-1 cursor-pointer mr-3 "
                />
            </div>
            {searchInput && (
                <DateRange
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                )
            }
        </div>

    )
}

export default HeaderCenter;
