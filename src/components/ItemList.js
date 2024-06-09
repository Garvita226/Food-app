import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"

const ItemList = ({ items }) => {
    // console.log(items)

    // Dipatching an action

    const dispatch = useDispatch()

    const handleAddItem =(e, item) => {
        e.target.classList.remove('bg-green-200')
        e.target.classList.add('bg-green-300')
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => {
                return (
                    <div data-testid='resItem' key={item.card.info.id} className="flex row p-2 m-2 text-left border-b-2">
                        <div className="w-9/12">
                            <div className="flex flex-col py-2">
                                <span className="font-bold text-slate-700"> {item.card?.info?.name} </span>
                                <span>₹ {item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice/100} </span>
                            </div>
                            <p className="text-sm font-light">{item.card?.info?.description}</p>
                        </div>
                
                        <div className="w-3/12 p-4 relative">
                        <div className="absolute bottom-0 left-16">
                            <button className="px-3 py-2 bg-green-200 text-xs font-bold rounded-md"
                           onClick={(e) => handleAddItem(e, item)}>Add +</button>
                        </div>
                        <img className="w-full h-20 my-auto ml-4" src={CDN_URL + item.card.info.imageId} alt="" />
                        </div>

                    </div>)
            })}
        </div>
    )
}

export default ItemList