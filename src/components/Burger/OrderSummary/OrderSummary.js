import React from 'react';
import Auxilary from '../../../hoc/Auxilary';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
      return (
        <li key={igkey}>
        <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
      )
    })

  return (
    <Auxilary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>

      <ul>
        {ingredientSummary}
      </ul>

    </Auxilary>
  )
}

export default orderSummary;