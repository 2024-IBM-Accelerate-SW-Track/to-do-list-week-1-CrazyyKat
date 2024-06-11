import React, { Component } from 'react';
import "./About.css";
import pic from "src/assets/DSC_0655.jpg";
// import <profile_pic_name> from "../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>Design your About me page </p> 

        <div>
<div className="split left">
<div className="centered">
<img 
className="profile_image"
src={pic}
alt="Profile Pic"
></img>
</div>
</div>
<div className="split right">
<div className="centered">
<div className="name_title">Kat</div>
<div className="brief_description">
{/* // Details about you goes here */}
<p>I love sweet potatoes</p>
<p>My favorite animal is a giraffe</p>
<p>The green Skittle is the best Skittle</p>
</div>
</div>
</div>
</div>



      </div>
    )
  }
}