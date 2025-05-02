import ResturentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // hookes : Local State variables - normal js variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // API call
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        let data1 = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(data1);
    };

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        //filter logic
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating >= 4.5
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Rastaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurants, index) => (
                    <ResturentCard resData={restaurants} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Body;
