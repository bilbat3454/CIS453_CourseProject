import React, { Component } from "react";
import Banner from "./Images/About_Us.png";
 
class About extends Component {
  render() {
    return (
      <div>
        <img src={Banner} alt="logo" style={{ width: '750px', }}/>
        <h3>Nature Boy Grooming offers top-quality grooming products for 
          men that cater to their needs!</h3>
          <p>The products includes beard oils, 
          balms, wash, conditioners, and grooming tools like beard combs and brushes. 
          We also provide lip balms, bar soaps for face and body care, and various 
          beanies and hats for headwear.</p>
          <p>Additionally, we provide multiple services 
          such as memberships, newsletter sign-ups, and different forms of media. 
          </p>
          <button className="btn">Order Now</button>
      </div>
    );
  }
}
 
export default About;