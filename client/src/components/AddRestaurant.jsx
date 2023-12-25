import React from 'react'

function AddRestaurant() {
  return (
    <div className='mb-4'>
      <form action="">
        <div className='d-flex flex-row justify-content-center'>
          <div className="pe-3 flex-fill">
            <input type="text" className="form-control" placeholder='name'/>
          </div>
          <div className="pe-3 flex-fill">
            <input type="text" className="form-control" placeholder='location'/>
          </div>
          <div className="d-flex flex-row justify-content-center flex-fill">
            <select className='form-select me-2'>
              <option value="" disabled hidden selected>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
            <button className='btn btn-primary'  type='submit'>
            Add
          </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant