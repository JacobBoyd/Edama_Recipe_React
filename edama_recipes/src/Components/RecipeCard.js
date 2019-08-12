import React from 'react'
import PropTypes from 'prop-types'

const RecipeCard = ({ title, calories, imgURL }) => {
    return (
        <article className="recipe-card">
            <img src={imgURL} alt="Recipe"/>
            <h3>{title}</h3>
            <p> 
                &bull; <span className="calories">{calories}</span>
            </p>
        </article>
    );
}

RecipeCard.propTypes = {
    title: PropTypes.string,
    calories: PropTypes.number,
    imgURL: PropTypes.string
}

export default RecipeCard
