import data from '../data.json';
import { useState } from 'react';
import '../styles.css'


const FavoriteHeroes = () => {
    const [index, setIndex] = useState(0);
    const heroesList = data;
    const hero = heroesList[index];

    const handleClick = () => {
        if (index < heroesList.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    return (
        <div>
            <button onClick={handleClick} className='nextButton'>
                Next
            </button>
            <div>
                <img src={hero.photoURL} className='heroImg'/>
                <ul className='list'>
                    <li>Name: {hero.name}</li>
                    <li>Role: {hero.role}</li>
                    <li>Ultimate Ability: {hero.ultimateAbility}</li>
                    <li>E Ability: {hero.firstAbility}</li>
                    <li>Shift Ability: {hero.secondAbility}</li>
                </ul>
            </div>
        </div>
    )
}

export default FavoriteHeroes;