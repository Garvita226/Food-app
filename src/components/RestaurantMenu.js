import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null)

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2].card.card.info

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    console.log(categories) 

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(', ')} - {costForTwoMessage}
            </p>

            <div className="my-6">
                {categories.map((category, index) => {
                    return <RestaurantCategory key={category.card.card.title}
                        data={category.card.card}
                        setShowIndex={setShowIndex}
                        showItems={showIndex === index ? true : false}
                        index={index}
                    />
                })}
            </div>
        </div>
    )
}

export default RestaurantMenu;