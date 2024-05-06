import recipedata from "./recipe.json";
import './styling.css'

function AuthorInfo() {
  const authorName = recipedata.map((recipe) => {
    return (
      <div key={recipe.name}>
        {recipe.author}
      </div>
    )
  })
  const authorImage = recipedata.map((recipe, index) => {
    return <img 
              alt={recipe.author} 
              src={recipe.authorImage}
              className='authorImage'
              key={index}
            />
  })
  const recipeWebsite = recipedata.map((recipe, index) => {
    return <a href={recipe.website} key={index}>Click here to go to the recipe</a>
  })
   return (
    <div>
      {authorImage}
      {authorName}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 