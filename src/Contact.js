import React, { Component } from "react";
import Contact_banner from "./Images/Contact.png";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <p><img src={Contact_banner} alt="logo" style={{ width: '750px', }}/></p>
        <p>Greetings! We are located in beautiful southern California, right 
          near the mountains of the San Gabriel Valley. Please reach out, as 
          we welcome all inquiries and feedback!</p>
        <p>Email Address: info@natureboyproducts.com</p>
        <p>Head Office: 1050 Lakes Dr, Suite #225, ​West Covina, CA 91790</p>
        <p>Hours: 9am-5:30pm M-F</p>
      </div>
    );
  }
}
 
export default Contact;