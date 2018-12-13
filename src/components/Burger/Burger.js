import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const numberOfIngredients = Object.keys(props.ingredients)
    .reduce((acc, curentValue) => acc + props.ingredients[curentValue], 0);

  const transformedIngredients = numberOfIngredients > 0 ? Object.keys(props.ingredients)
    .map((igKey) => [...Array(props.ingredients[igKey])]
      .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
    ) :
    <p>Please start adding ingredients</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
