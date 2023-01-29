import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";


function Header() {
    return (
        <div>
            <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2">
                {/*left*/}
                <HeaderLeft/>


                {/*middle search*/}
                <HeaderCenter/>

                {/*Right*/}
                <HeaderRight/>

            </header>
        </div>
    )
}

export default Header;
