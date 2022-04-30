import React from "react";
import { SubHeading } from ".."

import "./Newsletter.scss";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant" style={{marginBottom: "1rem"}}>Subscribe to our newsletter</h1>
      <p className="p__opensans">And Never miss our latest updates</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
