import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxilary from '../../hoc/Auxilary';

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxilary>
                <Burger />
                <div>Burger Controls</div>
            </Auxilary>
        )
    }
}

export default BurgerBuilder;