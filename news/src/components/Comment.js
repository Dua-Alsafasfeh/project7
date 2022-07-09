import { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../style/Comment.css' ;

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"   
};

function Comment(){ 
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <>
    <div class="d-flex justify-content-center align-items-center float-lg-right mr-5">

      <div class="card p-3">
    <div style={styles.container}>
      <h2> Ratings us </h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}

              style={{
                marginRight: 10,
                cursor: "pointer"
              }}

              onClick={() => handleClick(index + 1)}
              color={(hoverValue || currentValue) > index ?colors.orange : colors.grey}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              
            />
          )
        })}

        
      </div>
      </div>

      {/* <textarea
        placeholder="What's your experience?"
        style={styles.textarea}
      /> */}

      {/* <button
        style={styles.button}
      >
        Submit
      </button> */}
      
<div class="align-items-center">

      <div class="mt-5 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Busniess News</h5>
            <div class="small-ratings ml-5">
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            </div>

        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Spost News</h5>
            <div class="small-ratings ml-5 ">
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
        
        
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Food Recipes</h5>
            <div class="small-ratings ml-5">
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
        
        
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat ">Advertisment</h5>
            <div class="small-ratings ml-5" style={{color:'#FFBA5A'}}>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
                <i class="fa fa-star rating-color"></i>
            </div>
        </div>
        
        
        <div class="mt-1 d-flex justify-content-between align-items-center">
            <h5 class="review-stat">Pastrol</h5>
            <div class="small-ratings ml-5">
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i style={{color:'#FFBA5A'}} class="fa fa-star rating-color"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
        
    
      </div></div>
      </div>






        
      
    </>
  );
};


const styles = {
  container: {
    width:"270px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },

 

};




export default Comment;