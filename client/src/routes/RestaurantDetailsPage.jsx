import React, { useContext, useEffect } from 'react'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';

function RestaurantDetailsPage() {
  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} =useContext(RestaurantsContext);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response = await RestaurantFinder.get(`/${id}`);
        //console.log(response.data.data);
        setSelectedRestaurant(response.data.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      {selectedRestaurant && (<>
        <h1 className='font-weight-light display-1 text-center'>
        {selectedRestaurant.restaurant.name}
        </h1>
        <StarRating rating={5}/>
      </>)}
    </div>
  )
}

export default RestaurantDetailsPage