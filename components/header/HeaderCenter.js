import {useState} from "react";
import {MagnifyingGlassIcon, UserGroupIcon} from "@heroicons/react/24/solid";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function HeaderCenter() {

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
      setSearchInput('')
    }

    return (
        <div>
            <div className="flex items-center justify-between
                            border-b-2 rounded-full py-2 hover:shadow-md">
                <input
                    className="pl-3 bg-transparent text-sm text-gray-400 outline-none w-full"
                    type="text"
                    placeholder="Start your search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <MagnifyingGlassIcon
                    className="h-6 hidden md:inline-flex bg-red-400 text-white
                                        rounded-full p-1 cursor-pointer mr-3 "
                />
            </div>
            {searchInput && (
                <div className="absolute left-2 lg:left-auto ">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                        className="w-[150px] sm:w-full"
                    />
                    <div className="flex items-center  bg-white pt-3 ">
                        <h2 className="text-xl pl-4 flex-grow border-b font-light font-Unbounded">
                            Number a Guests
                        </h2>
                        <UserGroupIcon className="h-4 w-4"/>
                        <input
                            value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            type="number"
                            min={1}
                            className="w-12 pl-2 text-lg outline-none border-b-2 text-red-500"
                        />
                    </div>
                    <div className="flex bg-white p-3">
                        <button
                            className="flex-grow text-gray-500"
                            onClick={resetInput}
                        >
                            Cancel
                        </button>
                        <button className="flex-grow text-red-500">
                            Search
                        </button>
                    </div>
                </div>)
            }
        </div>

    )
}

export default HeaderCenter;
