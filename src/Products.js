import React, { Component } from "react";
import Product from "./nature boy grooming_products.png";

class Products extends Component {
  render() {
    return (
      <div>
        <h2>Product Line</h2>
        <img src={Product} alt="product" style={{ width: '700px',}}/>
      </div>
    );
  }
}
 
export default Products;