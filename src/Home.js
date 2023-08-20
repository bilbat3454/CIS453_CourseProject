import React, { Component } from "react";
import Logo from "./Images/Natureboy_products.png";
 
class Home extends Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="logo" style={{ width: '750px', }}/>
        <h2><button className="btn">Order Now</button></h2>
      </div>
    );
  }
}
 
export default Home;
