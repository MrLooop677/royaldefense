"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Container } from "@mui/material";
import partner1 from "../../../public/images/partner1.jpeg";
import partner2 from "../../../public/images/partner2.jpeg";
import partner3 from "../../../public/images/partner3.jpeg";
import partner4 from "../../../public/images/partner4.jpeg";
import partner5 from "../../../public/images/partner5.jpeg";
import partner6 from "../../../public/images/partner6.jpeg";
const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 2000,
  };

  return (
    <Box mt={8} mb={3}>
      <Typography align="center" variant="h3" mb={2}>
        Our Clients
      </Typography>

      <Box sx={{ background: "#fff" }} px={2}>
        <Slider {...settings}>
          <div>
            <img src={partner1.src} />
          </div>
          <div>
            <img src={partner2.src} />
          </div>
          <div>
            <img src={partner3.src} />
          </div>
          <div>
            <img src={partner4.src} />
          </div>
          <div>
            <img src={partner5.src} />
          </div>
          <div>
            <img src={partner6.src} />
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export default OurClients;
