import Image from "next/image";

function MediumCard({  tags, webformatURL, likes}) {
    return (
        <div className="space-x-4 ml-5 cursor-pointer
                rounded-2xl hover:scale-105 transition
                transform duration-200 ease-out  my-3">
            <div className="relative h-48 w-48">
                <Image
                    src={webformatURL}
                    alt=""
                    fill
                    className="rounded-xl rounded"
                />
            </div>

            <div className="mt-4">
                <h3 className="font-normal font-Unbounded text-md"> { tags.split(',')[0] }</h3>
                <p className="text-gray-400 font-Unbounded text-sm font-light"> likes: { likes}</p>
            </div>
            
        </div>
    )
}

export default MediumCard;
