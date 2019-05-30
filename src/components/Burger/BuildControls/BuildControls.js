import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: ${props.price.toFixed(2)}</p>
      {controls.map(ctrl => {
        return <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          type={ctrl.type}
          added={props.addIngredient}
          removed={props.removeIngredient}
          disabled={props.disabled[ctrl.type]} />
      })}

      <button className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW!</button>
    </div>
  )
}

export default buildControls;