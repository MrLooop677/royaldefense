"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const AutoPlaySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 2000,
  };

  return (
    <Box mt={1}>
      <Slider {...settings}>
        <div>
          <img
            style={{ height: "450px" }}
            src={`https://templateplazza.com/images/slides/responsivebannerslider/responsivebannerslider3.jpg`}
          />
        </div>
        <div>
          <img
            style={{ height: "450px" }}
            src={`https://i.pinimg.com/originals/7a/a9/cc/7aa9ccddbe2e40c5ac9b2485890609d5.jpg`}
          />
        </div>
        <div>
          <img
            style={{ height: "450px" }}
            src={`https://i.ytimg.com/vi/CDvk78XX4Wc/maxresdefault.jpg`}
          />
        </div>
        <div>
          <img
            style={{ height: "450px" }}
            src={`https://cdn.dribbble.com/users/1209067/screenshots/6213847/mydesign_4x.png`}
          />
        </div>
        <div>
          <img
            style={{ height: "450px" }}
            src={`http://blog.magestore.com/wp-content/uploads/2016/01/saloon1.jpg`}
          />
        </div>
        <div>
          <img
            style={{ height: "450px" }}
            src={`https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1a217134646519.56e18c7bdaed1.jpg`}
          />
        </div>
        {/* <div>
          <img
            src={`https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1a217134646519.56e18c7bdaed1.jpg`}
          />
        </div>
        <div>
          <img
            src={`http://blog.magestore.com/wp-content/uploads/2016/01/saloon1.jpg`}
          />
        </div>
        <div>
          <img
            src={`http://blog.magestore.com/wp-content/uploads/2016/01/saloon1.jpg`}
          />
        </div>
        <div>
          <img
            src={`http://blog.magestore.com/wp-content/uploads/2016/01/saloon1.jpg`}
          />
        </div> */}
      </Slider>
    </Box>
  );
};

export default AutoPlaySlider;
