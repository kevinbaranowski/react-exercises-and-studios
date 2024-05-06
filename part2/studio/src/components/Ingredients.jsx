import recipedata from "./recipe.json";

function IngredientList() {
  const recipe = recipedata[0]
   return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {
          recipe.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>
          }) 
        }
      </ul>
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 