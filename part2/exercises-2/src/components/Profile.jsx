import './styles.css';
import Button from './Button';
import data from './oceans.json'

function Profile() {
   const listItem = data.map(item => {
      return (
         <div key={item.id} className={item.fishCheck === 'true' ? 'isAFish' : 'profile'}>
            <img src={item.image} alt={item.name} className='img'/>
            <h1>{item.name}</h1>
            <h3>Fun Facts!</h3>
            <ul>
               <li>{item.fact1}</li>
               <li>{item.fact2}</li>
               <li>{item.fact3}</li>
            </ul>
            <Button />
         </div>
      )
   })
   return(
         <ul>
            {listItem}
         </ul>
   );
}

export default Profile;