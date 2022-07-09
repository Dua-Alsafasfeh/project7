import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import Alert from "./Alert";

function Food() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "75b902c3";
  const APP_KEY = "2aca579d26240159a07170ed0e30cc52";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the field");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
<div className="container">



<section className="best-of-the-week">
  <div className="container">
    <h1 className="line">
      <div className="text "> Search For Food recipes</div>
      <div className="carousel-nav" id="best-of-the-week-nav">
        {/* <div className="prev">
          <i className="ion-ios-arrow-left" />
        </div>
        <div className="next">
          <i className="ion-ios-arrow-right" />
        </div> */}
      </div>
    </h1>

    {alert !== "" && <Alert alert={alert} />}
<form className="search offset-3"  onSubmit={onSubmit} style={{ height: '100%',width:'40%' }}>
<div className="form-group">
    <div className="input-group">
      <input type="text" name="q" className="form-control" onChange={onChange} value={query} placeholder="Search Food" />
        <div className="input-group-btn">
          <button className="btn btn-primary">
                 <i className="ion-search" />
         </button>
     </div>
</div>
</div>
</form>
<div className="row container">
        
        {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
   

</div>
</div>

</section>


    </div>
  );
}

export default Food;