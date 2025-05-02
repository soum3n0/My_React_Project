import { CDN_URL } from "../Utils/contants";

const ResturentCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name,cuisines,avgRating,sla:{deliveryTime}} = resData?.info; //optional chaining
  // console.log(resData);

  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <div className="res-about">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default ResturentCard;
