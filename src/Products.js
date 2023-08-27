import React, { Component } from "react";
import Prod1 from "./Images/prod_1.png";
import Prod2 from "./Images/prod_2.png";
import Prod3 from "./Images/prod_3.png";
import Products_banner from "./Images/Products.png";


class Products extends Component {
  render() {
    return (
      <div>
        <p><img src={Products_banner} alt="logo" style={{ width: '750px', }}/></p>
        <img src={Prod1} alt="product" style={{ width: '300px',}}/>
        <p>Beard Oil 2-pack</p>
        <p>$44</p>
        <p><button className="btn">Add to Cart</button></p>
        <img src={Prod2} alt="product" style={{ width: '300px',}}/>
        <p>Beard Balm 2-pack</p>
        <p>$44</p>
        <p><button className="btn">Add to Cart</button></p>
        <img src={Prod3} alt="product" style={{ width: '300px',}}/>
        <p>Beard Conditioner 2-pack</p>
        <p>$45</p>
        <p><button className="btn">Add to Cart</button></p>
      </div>
    );
  }
}
 
export default Products;