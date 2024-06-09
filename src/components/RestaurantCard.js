import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props
    // console.log(resData)
    // console.log(resData)

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = resData?.info
    const deliveryTime = sla?.deliveryTime

    return <div data-testid='resCard' className="m-4 p-4 h-96 w-60 bg-gray-100 hover:bg-gray-200 rounded-lg">
        <img className='overflow-clip rounded-lg h-40 w-52' src={CDN_URL + cloudinaryImageId} alt="" />
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4>{cuisines.join(', ').length > 47 ? cuisines.join(', ').slice(0, 47) + '...' : cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
}

export default RestaurantCard;