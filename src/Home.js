import React, { Component } from "react";
import Logo from "./Natureboy_products.png";
 
class Home extends Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="logo" style={{ width: '600px', }}/>
        <p>Nature Boy Grooming offers top-quality grooming products for 
          men that cater to their needs. The products includes beard oils, 
          balms, wash, conditioners, and grooming tools like beard combs and brushes. 
          We also provide lip balms, bar soaps for face and body care, and various 
          beanies and hats for headwear. Additionally, we provide multiple services 
          such as memberships, newsletter sign-ups, and different forms of media. 
          </p>
          <button className="btn">Order Now</button>
      </div>
    );
  }
}
 
export default Home;
