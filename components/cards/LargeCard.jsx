import Image from "next/image";

function LargeCard({  tags, webformatURL, likes}) {
    return (
        <div className="relative space-x-4  items-center flex rounded-2xl mt-8" >
            <div className="relative h-96 w-[100%]">
                <Image
                    src={webformatURL}
                    alt=""
                    fill
                    style={{ objectFit: 'cover'}}
                    className="rounded-2xl rounded"
                />
            </div>

            <div className="absolute mt-4 top-32 left-12 text-white font-Unbounded">
                <h3 className="font-normal text-5xl uppercase shadow-sm"> { tags.split(',')[0] }</h3>
                <p className="text-sm"> likes: { likes }</p>
                <button
                    className="mt-3 bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-900
                                hover:scale-105  transition ease-out">
                    Get Inspire
                </button>
            </div>

        </div>
    )
}

export default LargeCard;
