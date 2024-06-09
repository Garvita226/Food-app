import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResList from "../utils/useResList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    const listOfRestaurants = useResList();
    const onlineStatus = useOnlineStatus();

    const {loggedInUser, setUserName} = useContext(UserContext)

    useEffect(() => {
        setFilteredRestaurants(listOfRestaurants)
        // console.log(listOfRestaurants)
    }, [listOfRestaurants])

    if(onlineStatus === false) {
        return (
            <div>
                <h1>Looks like you're offline. Please check your internet connection and try again !</h1>
            </div>
        )
    }

    return listOfRestaurants.length === 0 ? <Shimmer/> : ( <div className="body">
        <div className="flex items-center justify-between">

            {/* Search functionality */}
            <div className="m-4 p-4">

                <input data-testid="searchInput" type="text" className="border border-solid border-black h-9" onChange={(e) => {
                    setSearchText(e.target.value)
                }} value={searchText}/>

                <button className="ml-3 bg-green-100 px-4 py-2 rounded-lg" onClick={() => {

                    const filteredRestaurants = listOfRestaurants.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    })

                    setFilteredRestaurants(filteredRestaurants)

                }}>Search</button>
            </div>

            {/* Filter for top-rating */}
            <button className="ml-3 bg-green-100 px-4 py-2 mr-8 rounded-lg" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.4);
                setFilteredRestaurants(filteredList)
            }}>Top-rated Restaurants</button>
        </div>

        <div>
            <label className="ml-8">User Name: </label>
            <input type="text" className="border border-black p-1 mb-4" value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}/>
        </div>

        {/* Displaying the restaurants */}
        <div className="flex flex-wrap justify-center">
            {filteredRestaurants.map((restaurant) =>  (
            <Link key={restaurant.info.id} to={'restaurants/' + restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link>
            ))}
        </div>
    </div>)
}

export default Body;