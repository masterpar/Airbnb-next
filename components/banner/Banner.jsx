import Image from "next/image"

function Banner({ webformatURL, tags}) {
    return (
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[650px]">
            <Image
                src={webformatURL}
                alt={tags.split(" ")[0]}
                fill
                style={{ objectFit: 'cover'}}
                className="rounded-2xl rounded"
            />
            <div className="absolute top-1/3 w-full text-center ">
                <h1 className="text-white shadow-gray-800 text-5xl uppercase font-Unbounded drop-shadow-lg">
                    { tags }
                </h1>
                <p className="text-xl font-semibold lg:text-3xl text-white drop-shadow-xl italic">
                    Not sure where to go? Perfect.
                </p>
                <button
                    className="text-purple-500 bg-white px-10 py-3 mt-4 rounded-full font-Unbounded font-normal
                    shadow-sm font-bold cursor-pointer hover:shadow-xl active:scale-90 transition duration-150">
                    I'm flexible
                </button>
            </div>
        </div>
    )
}

export default Banner;
