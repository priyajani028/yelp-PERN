import React, {useState, useContext, useEffect} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from 'react-router-dom';

function RestaurantList(props) {
  const { restaurants, setRestaurants} = useContext(RestaurantsContext);
  let navigate = useNavigate();

  const handleUpdate =(e, id)=>{
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  }

  const handleDelete=async(e,id)=>{
    e.stopPropagation();
    try{
      const response= await RestaurantFinder.delete(`${id}`);
      setRestaurants(restaurants.filter((restaurant)=>{
        return restaurant.id !== id;
      }));
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        //console.log(response.data.data);
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSelected =(id)=>{
    navigate(`/restaurants/${id}`);
  }

  return (
    <div className='list-group'>
      <table className="table table-dark table-hover align-middle ">
        <thead className=''>
          <tr className='table-primary'>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant)=>{
            return(
              <tr onClick={()=>handleSelected(restaurant.id)} key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>reviews</td>
                  <td>
                    <button className='btn btn-warning'  onClick={(e) => handleUpdate(e,restaurant.id)}>Update</button>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={(e)=>handleDelete(e,restaurant.id)}>Delete</button>
                  </td>
              </tr>
            )
          })}
          {/* <tr>
            <td>mcdonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className='btn btn-warning'>Update</button>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>mcdonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className='btn btn-warning'>Update</button>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList