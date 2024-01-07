import React from 'react';
import StarRating from '../components/StarRating';

function Reviews({reviews}) {
  return (
    <div className='row row-cols-3 mb-2'>
        {reviews && reviews.map((review)=>{
            return (
                <div key={review.id} className="card text-bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
                  <div className="card-header d-flex justify-content-between">
                    <span className='' style={{ minWidth: "50%" }}>{review.name}</span>
                    <StarRating rating={review.rating}/>
                    </div>
                  <div className="card-body">
                    <p className="card-text">{review.review}</p>
                  </div>
                </div>
            )
        })}
    </div>
  )
}

export default Reviews