import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        salad: 1,
        bacon: 3,
        cheese: 1,
        meat: 1,
      },
      totalPrice: 4
    };
  }

  addIngredientHandler = type => {
    const ingredients = {...this.state.ingredients};
    ingredients[type] = this.state.ingredients[type] + 1;
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice, ingredients});
  }

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const ingredients = {...this.state.ingredients};
    ingredients[type] = this.state.ingredients[type] - 1;
    const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({totalPrice, ingredients});
  }

  render() {

    const diabledIngredients = {...this.state.ingredients};
    for (let key in diabledIngredients) {
      diabledIngredients[key] = diabledIngredients[key] <= 0;
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          isDisabled={diabledIngredients} />
      </>
    );
  }
}

export default BurgerBuilder;
