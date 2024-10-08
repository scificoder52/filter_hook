import RestaurantCard from "./RestaurantCard";

import restaurantData from "../utils/mockData"; //it is restaurantList 
import { useState } from "react";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState(restaurantData);


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
         FilterList=restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.3);
         setRestaurantList(FilterList);
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
