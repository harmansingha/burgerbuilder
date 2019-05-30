import React from 'react';
import Auxilary from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
      return (
        <li key={igkey}>
          <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingredients[igkey]}</li>
      )
    })

  return (
    <Auxilary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>

      <ul>
        {ingredientSummary}
      </ul>

      Total Amount: <strong>${props.price.toFixed(2)}</strong>

      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.puchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.puchaseContinued}>CONTINUE</Button>
    </Auxilary>
  )
}

export default orderSummary;