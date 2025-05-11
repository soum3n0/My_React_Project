import useRastaurantMenu from "../Utils/useRastaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantManu = () => {
 
  const { resId } = useParams();
  const resMenu = useRastaurantMenu(resId);
  
  if (resMenu === null) return <Shimmer />;

  const { name, areaName, cuisines, costForTwoMessage, avgRating } = resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
            <li key={item.card.info.id}>{ item.card.info.name}</li>
        )
        )}
        
      </ul>
    </div>
  );
};

export default RestaurantManu;
