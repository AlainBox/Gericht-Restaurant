import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.scss";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant app__chef-h1">
        What We Believe In
      </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
        </div>
        <p className="p__opensans">
          Quisque et gravida ante. Vivamus dignissim felis mauris, a scelerisque
          Curabitur et libero nec ipsum posuere bibendum.
          Curabitur euismod turpis mi, vitae eleifend arcu aliquet vel.
          Fusce non lacus pellentesque, egestas est ut, maximus neque.
          Praesent vel urna feugiat, vehicula sapien eget, commodo quam.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
