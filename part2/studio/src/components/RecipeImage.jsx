import recipedata from "./recipe.json";
import './styling.css'

function RecipeImage() {
  const recipeImage = recipedata.map((recipe, index) => {
    return <img alt={recipe.name} src={recipe.recipeImage} className='recipeImage' key={index}/>
  })
   return (
    <div>
      {recipeImage}
    </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 