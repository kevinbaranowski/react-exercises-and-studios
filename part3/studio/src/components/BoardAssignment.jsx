import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: 'Comfort Food',
         value: 'Comfort Food'
      },
      {
         label: 'Pasta',
         value: 'Pasta'
      },
      {
         label: 'Cheese Lovers',
         value: 'Cheese Lovers'
      }
   ];

   const board = boards.map((board, index) => {
      return (
            <option key={index} value={board.value}>{board.label}</option>
      )
   })

   let [boardName, setName] = useState('no boards yet!')

   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {board}
      </select>
      {boardName !== 'no boards yet!' && <p>Saved to {boardName}!</p>}
      </div>
   );
}
