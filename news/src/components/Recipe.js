import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    // <div className="recipe">
    //   <h2>{label}</h2>
    //   <img src={image} alt={label} />
    //   <a href={url} target="_blank" rel="noopener noreferrer">
    //     URL
    //   </a>
    //   <button onClick={() => setShow(!show)}>Ingredients</button>
    //   {show && <RecipeDetails ingredients={ingredients} />}

<>
      <article className="article" style={{ display:"block", padding:'12px',height: '20%',width:'20%'}}>
        <div className="inner">
          <figure>
            <a href={url}>
              <img src={image} alt={label}  style={{ height: '90%',width:'90%',}}/>
            </a>
          </figure>
          <div className="padding">
            <div className="detail">
              <div className="time">{label}</div>
              <div className="category">
                <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
            <h2>
              <a  onClick={() => setShow(!show)}>Ingredients</a>
              {show && <RecipeDetails ingredients={ingredients} />}
            </h2>
          </div>
        </div>
      </article>
    </>
  );
};

export default Recipe;