import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.entries(props.ingredients)
    .map(entry => (
      <li key={entry[0]}>
        <span style={{textTransform: 'capitalize'}}>{entry[0]}</span>: {entry[1]}
      </li>
    ));

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingerdiesnts:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </>
  );
};

export default orderSummary;
