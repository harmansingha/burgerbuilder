import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={() => props.removed(props.type)} disabled={props.disabled}>Less</button>
      <button className={classes.More} onClick={() => props.added(props.type)}>More</button>
    </div>
  )
}

export default buildControl;