import {UserGroupIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
function DateRange({ setSearchInput }) {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);


    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    return (
        <div className="flex flex-col absolute left-0 md:left-auto bg-white w-[475px]">
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#FD5B61']}
                onChange={handleSelect}
                className="w-[180px]"
            />
            <div className="flex items-center pt-3">
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
            <div className="flex p-3">
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
        </div>
    )
}

export default DateRange;
