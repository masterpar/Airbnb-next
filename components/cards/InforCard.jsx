import Image from "next/image";

function InforCard({ img, location, title, description, start, price, total, long, lat}) {
    return (
        <div>
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 m-2">
            <Image
                src={img}
                fill
                alt=""
                style={{ objectFit: 'cover'}}
                className="rounded-2xl"
            />
            </div>

        </div>
    )
}

export default InforCard;
