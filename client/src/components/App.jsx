import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import styles from "../../dist/style.css";
import Shipping_returns from "./Shipping_returns.jsx"
=======
import styles from "../../dist/style.css"
>>>>>>> 2cc8e25c95e5b596c49222e062172515438cdbdc

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends React.Component {
  constructor() {
    super();
    this.state = { visible_shippings: false,
                   visible_reviews: false,
                   visible_info: false
    };
  }

  slideUpShippings() {
    this.setState({ visible_shippings: ! this.state.visible_shippings });
  }

  slideUpReviews() {
    this.setState({ visible_reviews: ! this.state.visible_reviews });
  }

  slideUpInfo() {
    this.setState({ visible_info: ! this.state.visible_info });
  }

  render() {
    return (
      <div class='container'>

        <div class="shippings" onClick={this.slideUpShippings.bind(this)} >FREE SHIPPING & RETURNS</div>
          <ReactCSSTransitionGroup transitionName="example">
<<<<<<< HEAD
            { this.state.visible_shippings ? <Shipping_returns /> : null }
=======
            { this.state.visible_shippings ? <div className='panel' /> : null }
>>>>>>> 2cc8e25c95e5b596c49222e062172515438cdbdc
          </ ReactCSSTransitionGroup>

        <div class="reviews" onClick={this.slideUpReviews.bind(this)} >REVIEWS (154)</div>
          <ReactCSSTransitionGroup transitionName="example">
            { this.state.visible_reviews ? <div className='panel' /> : null }
          </ ReactCSSTransitionGroup>

        <div class="info" onClick={this.slideUpInfo.bind(this)} >MORE INFO</div>
          <ReactCSSTransitionGroup transitionName="example">
            { this.state.visible_info ? <div className='panel' /> : null }
          </ ReactCSSTransitionGroup>

      </div>
    )
  }
}

export default App