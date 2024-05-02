import classes from './ChoresList.module.css'

export default function ChoresList () {
   const chores = ['vacuum house', 'empty and load dishwasher', 'mow lawn', 'walk dog']
   return (
      <div>
         <h3 class={classes.choresHeading}>List of Chores To Do</h3>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
            <li className={classes.choresText}>{chores[3]}</li>
         </ol>
      </div>     
   )
      
}