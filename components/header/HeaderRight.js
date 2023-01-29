import {Bars3Icon, GlobeAltIcon, UserCircleIcon} from "@heroicons/react/24/solid";

function HeaderRight() {
    return (
        <div className="flex items-center space-x-2 justify-end px-4 text-gray-500">
            <p className="hidden md:inline cursor-pointer"> Become a host</p>
            <GlobeAltIcon className="h-6 " />

            <div className="flex space-x-2 border-2 rounded-full py-1 px-2">
                <Bars3Icon className="h-6"/>
                <UserCircleIcon className="h-6" />
            </div>
        </div>
    )
}

export default HeaderRight;
