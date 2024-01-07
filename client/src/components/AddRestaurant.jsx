import React, {useState, useContext, useEffect} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext';

function AddRestaurant() {
  const {addRestaurant} = useContext(RestaurantsContext);
  const [name,setName] = useState("");
  const [location,setLocation]=useState("");
  const [priceRange,setPriceRange]=useState("Price Range");

  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
      const response= await RestaurantFinder.post("/", {
        name, location, price_range : priceRange,
      });
      //console.log(response);
      addRestaurant(response.data.data.restaurants);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='mb-4'>
      <form action="">
        <div className='d-flex flex-row justify-content-center'>
          <div className="pe-3 flex-fill">
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder='name'/>
          </div>
          <div className="pe-3 flex-fill">
            <input value={location} onChange={(e)=> setLocation(e.target.value)} type="text" className="form-control" placeholder='location'/>
          </div>
          <div className="d-flex flex-row justify-content-center flex-fill">
            <select value={priceRange} onChange={(e)=> setPriceRange(e.target.value)} className='form-select me-2'>
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
            <button className='btn btn-primary'  type='submit' onClick={handleSubmit}>
            Add
          </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant