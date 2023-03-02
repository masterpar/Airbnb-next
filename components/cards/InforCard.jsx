import Image from "next/image";
import  { HeartIcon } from "@heroicons/react/24/outline"
import {StarIcon} from "@heroicons/react/20/solid";

function InforCard({ img, location, title, description, star, price, total, long, lat}) {
    return (
        <div className="flex hover:opacity-80 hover:scale-105
                        transition transform ease-out hover:shadow-lg first:border-t">
            <div className="relative h-40 w-40 md:h-52 md:w-150 flex-shrink-0 m-2
                            cursor-pointer ">
            <Image
                src={img}
                fill
                alt=""
                style={{ objectFit: 'cover'}}
                className="rounded-xl"
            />
            </div>

            <div className="flex flex-col flex-grow pl-5 py-3">
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500 font-light">{ location }</p>
                    <HeartIcon className="h-6 cursor-pointer" />
                </div>
                <p className="md:text-xl cursor-pointer">{ title }</p>

                <div className="border-b w-10 pt-2"/>

                <p className="pt-2 xl:pr-10 xl:text-sm  text-[12px] text-gray-400
                                font-normal flex-grow py-4">
                    { description }
                </p>

                <div className="flex justify-between items-center xl:text-md text-[13px]">
                    <p className="flex  ">
                        <StarIcon className="h-5 text-sm text-red-400 mr-2" /> { star }
                    </p>
                    <div className="pb-3">
                        <p className=" font-semibold pb-1">{ price }</p>
                        <p className="text-right font-extralight ">{ total }</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default InforCard;
