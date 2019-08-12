import React from 'react'
import PropTypes from 'prop-types'

const RecipeCard = ({ title, calories, imgURL }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{calories}</p>
            <img src={imgURL} alt="Recipe"/>
        </div>
    );
}

RecipeCard.propTypes = {
    title: PropTypes.string,
    calories: PropTypes.number,
    imgURL: PropTypes.string
}

export default RecipeCard
