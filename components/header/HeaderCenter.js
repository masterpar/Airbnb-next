import {useState} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function HeaderCenter() {

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
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
                </div>)
            }
        </div>

    )
}

export default HeaderCenter;
