import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxilary from '../../hoc/Auxilary';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Auxilary>
                <Burger ingredients={this.state.ingredients} />
                <div>Burger Controls</div>
            </Auxilary>
        )
    }
}

export default BurgerBuilder;