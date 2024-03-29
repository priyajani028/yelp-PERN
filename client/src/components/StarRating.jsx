import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className='text-warning' />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className='text-warning'/>);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={farStar} className='text-warning' />);
    }
  }
  return <>{stars}</>;
}

export default StarRating;
