
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
    // console.log(data)

    const handleClick = () => {
        setShowIndex(prevIndex => (prevIndex === index) ? null : index)
    }

    return (
        <div className="w-6/12 m-auto my-4 rounded-lg bg-gray-50 shadow-lg">
        {/* // {Accordian header} */}
        <div className="flex justify-between p-4 cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>

        {/* // {Accordian body} */}
        {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;