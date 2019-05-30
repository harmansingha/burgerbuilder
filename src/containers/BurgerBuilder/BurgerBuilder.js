import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Auxilary from '../../hoc/Auxilary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey]
        }).reduce((sum, cvalue) => {
            return sum + cvalue
        }, 0)
        this.setState({ purchaseable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type]
        const newValue = oldValue + 1;

        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newValue

        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = oldPrice + priceAddition

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldValue = this.state.ingredients[type]
        if (oldValue <= 0) {
            return;
        }
        const newValue = oldValue - 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newValue

        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = oldPrice - priceAddition

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
        this.updatePurchaseState(updatedIngredients)
    }

    render() {

        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Auxilary>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable} />
            </Auxilary>
        )
    }
}

export default BurgerBuilder;