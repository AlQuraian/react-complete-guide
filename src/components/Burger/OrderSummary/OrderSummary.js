import React from 'react';

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
            <p>Continue to checkout?</p>
        </>
    );
};

export default orderSummary;