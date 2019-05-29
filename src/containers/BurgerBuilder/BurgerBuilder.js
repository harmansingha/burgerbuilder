import React, { Component } from 'react'
import Auxilary from '../../hoc/Auxilary';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxilary>
                <div>Burger Display</div>
                <div>Burger Controls</div>
            </Auxilary>
        )
    }
}

export default BurgerBuilder;