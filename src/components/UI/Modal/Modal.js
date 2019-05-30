import React from 'react';

import classes from './Modal.css';
import Auxilary from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Auxilary>
      <Backdrop show={props.show} modalClosed={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100wh)',
          opacity: props.show ? '1' : '0',
          display: props.show ? 'block' : 'none'
        }}>
        {props.children}
      </div>
    </Auxilary>
  )
}

export default modal;