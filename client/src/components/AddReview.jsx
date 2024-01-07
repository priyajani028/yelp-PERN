import React, { useState } from 'react'

function AddReview() {
    const [name, setName ]=useState("");
    const [reviewText, setReviewText] =useState("");
    const [rating, setRating] =useState("");

    const handleSubmit=()=>{

    }
    
  return (
    <div className='mb-2'>
        <form className="row g-3">
            <div className="col-md-8">
                <label htmlFor='name' className='mb-2' style={{ textAlign: 'left', width: '100%' }}>Name</label>
                <input type="text" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                className="form-control" placeholder='Enter your name' id="name"/>
            </div>
            <div class="col-md-4">
                <label htmlFor='rating' className="form-label" style={{ textAlign: 'left', width: '100%' }}>Rating</label>
                <select value={rating}
                onChange={(e)=>setRating(e.target.value)}
                className='form-select me-2'>
                    <option value="" disabled>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
            </div>
            <div className="mb-3">
                <label htmlFor="review" className="form-label" style={{ textAlign: 'left', width: '100%' }}>Review</label>
                <textarea value={reviewText}
                onChange={(e)=> setReviewText(e.target.value)} className="form-control" id="review" rows="3"></textarea>
            </div>
            <div>
              <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
        </form>
    </div>
  )
}

export default AddReview