import React from 'react'
import styles from './Description.module.css'

const RecipeAuthor = () => {
    const authorLink = 'https://downshiftology.com/';
    const authorPhoto = 'https://secure.gravatar.com/avatar/4fb77c030a29cdf11dfb9f1537e144c5?s=36&d=mm&r=g';
    const authorName = 'Lisa Bryan'
    return (
        <div>
            <img src={authorPhoto} alt="Lisa Bryan's Avatar" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Downshiftology by Lisa Bryan</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Creamy Tuscan Chicken</h1>
                    <p>This delicious, creamy sauce with spinach, tomatoes, and garlic pairs 
                        amazingly with seared chicken breasts and rice to create the
                        most indulgent weeknight dinner.
                    </p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;
