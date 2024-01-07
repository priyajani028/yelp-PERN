import React from 'react';
import StarRating from '../components/StarRating';

function Reviews({reviews}) {
  return (
    <div className='row row-cols-3 mb-2 '>
        {reviews && reviews.map((review)=>{
            return (
                <div  key={review.id}  className=''>
                  <div className="card text-bg-primary mb-3 col" >
                    <div className="card-header d-flex justify-content-between">
                      <span className='' style={{ minWidth: "50%", textAlign: 'left' }}>{review.name}</span>
                      <StarRating rating={review.rating}/>
                      </div>
                    <div className="card-body" style={{minHeight: "5rem",}}>
                      <p className="card-text" style={{textAlign: 'left',}}>{review.review}</p>
                    </div>
                  </div>
                </div>
            )
        })}
    </div>
  )
}

export default Reviews