import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[650px]">
            <Image
                src="https://new-hls.s3.amazonaws.com/hls/data/5702/website/general/bn/sierra-hotel-banner-i.jpg"
                alt=""
                fill
                style={{objectFit:"cover"}}
            />
            <div className="absolute top-2/3 w-full text-center">
                <p className="text-sm font-semibold text-3xl text-white drop-shadow-xl">
                    Not sure where to go? Perfect.</p>
                <button
                    className="text-purple-500 bg-white px-10 py-3 mt-4 rounded-full
                    shadow-sm font-bold cursor-pointer hover:shadow-xl active:scale-90 transition duration-150">
                    I'm flexible
                </button>
            </div>
        </div>
    )
}

export default Banner;
