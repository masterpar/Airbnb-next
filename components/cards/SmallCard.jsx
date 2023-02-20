import Image from "next/image";

function SmallCard({  tags, webformatURL, likes}) {
    return (
        <div className="flex space-x-4 p-3 m-3 items-center cursor-pointer
                hover:bg-gray-100 rounded-2xl hover:scale-105 transition
                transform duration-200 ease-out">
            <div className="relative h-24 w-24">
                <Image
                    src={webformatURL}
                    alt=""
                    fill
                    className="rounded-lg"
                />
            </div>

            <div className="">
                <h3 className="font-normal font-Unbounded text-md"> { tags }</h3>
                <p className="text-gray-400 font-Unbounded text-sm"> likes: { likes}</p>
            </div>
            
        </div>
    )
}

export default SmallCard;
