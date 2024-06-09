import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnText, setBtnText] = useState('Login');

    const {loggedInUser} = useContext(UserContext)

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    const onlineStatus = useOnlineStatus();

    return <div className="flex justify-between shadow-lg mb-4">
        <div className="w-32">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4 py-0">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                <li className="px-4 py-0"> <Link to='/'> Home </Link></li>
                <li className="px-4 py-0"> <Link to='about'> About Us </Link></li>
                <li className="px-4 py-0"> <Link to='contact'> Contact Us </Link></li>
                <li className="px-4 py-0"> <Link to='grocery'> Grocery </Link></li>
                <li className="px-4 py-0 font-bold"> <Link to='cart'>Cart ({cartItems.length} items) </Link></li>
                <button className="px-4 py-0 " onClick={() => {
                    btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login');
                }}>{btnText}</button>
                <li className="px-4 py-0 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
}

export default Header;