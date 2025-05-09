import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API, MENU_PART } from "../Utils/contants";

const RestaurantManu = () => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fatchMenu();
  }, []);

  const { resId } = useParams();
  console.log(resId);
  
  const fatchMenu = async () => {
    const data = await fetch (MENU_API+ resId) ;                                        
    const json = await data.json();
    console.log(json);
    setResMenu(json?.data);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, areaName, cuisines, costForTwoMessage, avgRating } = resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{areaName}</h2>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>
      <h2>Menu:</h2>
      <ul>
        {itemCards.map((item) => ( 
            <li>{ item.card.info.name}</li>
        )
        )}
        
      </ul>
    </div>
  );
};

export default RestaurantManu;
