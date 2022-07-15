import React, { useState } from "react";
import Rating from "react-rating";
import axios from 'axios';
 
function Rate() {

  const [rating, setRating] = useState(0);

  const Click=(rate)=>{
    setRating(rate);
    axios.get('http://localhost/project7/userphp/rating.php?rating='+rate)
  }

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <strong>Rate our service: </strong>
      <br/>
      <Rating
        fractions={2}
        stop={10}
        initialRating={rating}
        onClick={rate => setRating(rate)}
        style={{color:'gold'}}
      />
      <p>Rating: {rating}</p>
    </div>
  );
}
 
export default Rate;