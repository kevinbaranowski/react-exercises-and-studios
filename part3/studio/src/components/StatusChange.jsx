import { useState } from 'react';

export default function StatusChange () {

   let [notes, setNotes] = useState('');
   let [recipeStatus, setStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setStatus(true);
      
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         {notes ? <p>{notes}</p>: <p>My Recipe Notes aren't here!</p>}
         {recipeStatus ? <p>I have tried this recipe!</p> : <p>I have not tried this recipe!</p>}
         
      </div>
   );
}
