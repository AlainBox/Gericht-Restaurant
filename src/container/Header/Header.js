import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.scss";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__header_info">
      <SubHeading 
        title="Chase the new flavour"
      />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: "2rem 0"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut volutpat nisl nunc, in vestibulum purus pretium vel.
      Vivamus est mi, sodales vel justo eget, fringilla.
      </p>
      <button type="button" className="custom__button">Explore our Menu</button>
    </div>
    <div className="app__header_image">
      <img src={images.welcome} alt="header-img"/>
    </div>
  </div>
);

export default Header;
