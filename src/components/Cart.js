import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="w-7/12 text-center m-auto">
            <h1 className="m-4 p-4 text-2xl font-bold">Cart</h1>
            <button className="bg-black text-white p-2 rounded-md" onClick={handleClearCart}>Clear Cart</button>
            <div>
                <ItemList items={cartItems}/>
                {cartItems.length === 0 && <h4>Your cart is empty. Add items to the cart !</h4>}
            </div>
        </div>
    )
}

export default Cart;