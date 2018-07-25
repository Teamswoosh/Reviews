import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Shipping_returns from "./Shipping_returns.jsx"
import Reviews from "./Reviews.jsx"
import styles from "../../dist/style.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible_shippings: false,
      visible_reviews: false,
      visible_info: false,
    };
  }

  slideUpShippings() {
    this.setState({ visible_shippings: !this.state.visible_shippings });
  }

  slideUpReviews() {
    this.setState({ visible_reviews: !this.state.visible_reviews });
  }

  slideUpInfo() {
    this.setState({ visible_info: !this.state.visible_info });
  }

  render() {
    return (
      <div className="container">

        <div className="parent">FREE SHIPPING & RETURNS</div>
        <div className="childComponent"><Shipping_returns /></div>

        <div className="parent">REVIEWS (154)</div>
        <div className="childComponent"><Reviews /></div>

        <div className="parent">MORE INFO</div>
        <div className="childComponent"><Shipping_returns /></div>

      </div>
    );
  }
}

export default App;
