import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

class BurgerBuilder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
      purchaseable: false,
      purchasing: false
    };
  }

  isPurchasable = (ingredients) =>
    Object.keys(ingredients)
      .map(key => ingredients[key])
      .reduce((acc, current) => acc + current, 0) > 0;


  addIngredientHandler = (type) => {
    const ingredients = {...this.state.ingredients};
    ingredients[type] = this.state.ingredients[type] + 1;
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice, ingredients, purchaseable: this.isPurchasable(ingredients)});
  }

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const ingredients = {...this.state.ingredients};
    ingredients[type] = this.state.ingredients[type] - 1;
    const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({totalPrice, ingredients, purchaseable: this.isPurchasable(ingredients)});
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  render() {

    const diabledIngredients = {...this.state.ingredients};
    for (let key in diabledIngredients) {
      diabledIngredients[key] = diabledIngredients[key] <= 0;
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          isDisabled={diabledIngredients}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler} />
      </>
    );
  }
}

export default BurgerBuilder;
