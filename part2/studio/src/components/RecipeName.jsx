import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map((recipe, index) => <h1 key={index}>{recipe.name}</h1>)
  return recipeName
}

export default RecipeName;

//import return the name of the recipe as a level 1 header