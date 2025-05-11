import { useState, useEffect } from "react";
import { LIST_RES_API } from "./contants";

const useFetchRastaurants = () => {
  const [listRes, setListRes] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(LIST_RES_API );
    const json = await data.json();
    // console.log(json);
    const res = json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListRes(res);
  };

  return listRes;
};

export default useFetchRastaurants;
