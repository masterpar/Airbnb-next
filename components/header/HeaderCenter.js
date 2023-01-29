import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

function HeaderCenter() {
    return (
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
    )
}

export default HeaderCenter;
