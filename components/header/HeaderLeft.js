import Image from "next/image";
import {useRouter} from "next/router";


function HeaderLeft() {

    const router = useRouter()

    return (
        <div
            className="flex items center reltive cursor-pointer
                         my-auto px-4 md:px-10"
            onClick={() => router.push('/')}
        >
            <Image
                src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
                alt=""
                width={100}
                height={90}
                className="hidden md:inline-flex"
            />
            <Image
                src="https://cdn.worldvectorlogo.com/logos/airbnb-1.svg"
                alt=""
                width={40}
                height={40}
                className="md:hidden p-1"
            />
        </div>
    )
}

export default HeaderLeft;
