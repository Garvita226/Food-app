import { useState, useEffect } from "react";
import { RESLIST_URL } from "../utils/constants";

const useResList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RESLIST_URL)
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRestaurants;
}

export default useResList;