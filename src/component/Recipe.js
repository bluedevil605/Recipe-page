import React from 'react'

const Recipe = () => {
  return (
    <div className='Recipe'>
      <h1>Simple Omelette Recipe</h1>
      <p>An easy quick dish perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetable, or meats</p>
      <button className='Prep-Time'><h3>Preparation Time</h3>
        <ul> 
            <li><strong>Total: </strong>Approximately 10 minutes</li>
            <li><strong>Preparation: </strong>5 minutes</li>
            <li><strong>Cooking: </strong>5 minutes</li>
        </ul>
      </button>
      <div className='Ingredients'>
        <h2>Ingredients</h2>
        <ul>
          <li>2-3 Large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>
      <hr />
    </div>

  )
}

export default Recipe
