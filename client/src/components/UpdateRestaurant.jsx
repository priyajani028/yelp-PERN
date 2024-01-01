import React, {useState, useEffect, useContext} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { useNavigate, useParams } from 'react-router-dom'; 
import { RestaurantsContext } from '../context/RestaurantsContext';

function UpdateRestaurant(props) {

  const {id}= useParams();
  let navigate = useNavigate();
  const {restaurants} =  useContext(RestaurantsContext);

  const [name, setName]=useState("");
  const [location, setLocation]=useState("");
  const [priceRange, setPriceRange]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        //console.log('Response data:', response.data.data);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const updated = await RestaurantFinder.put(`/${id}`,{name, location, price_range: priceRange});
    navigate("/");
  }

  return (
    <div>
      <form action=''>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Name</label>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Location</label>
          <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} className="form-control" id="location" />
        </div>
        <div className="mb-3">
          <label htmlFor="price_range" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Price Range</label>
          <input type="number" value={priceRange} onChange={(e)=>setPriceRange(e.target.value)} className="form-control" id="price_range" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  );
}

export default UpdateRestaurant;
