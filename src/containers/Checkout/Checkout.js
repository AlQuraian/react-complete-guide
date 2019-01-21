import React from 'react';
import {Route} from 'react-router-dom';
import queryString from 'query-string';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {

  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const ingredients = {};

    Object.entries(query)
      .forEach(param => {
        ingredients[param[0]] = +param[1];
      });

    this.setState({ingredients});
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCancel={this.checkoutCancelHandler}
          onContinue={this.checkoutContinueHandler}
        />
        <Route path={`${this.props.match.path + '/contact-data'}`} component={ContactData} />
      </div>
    )
  }
}

export default Checkout;
