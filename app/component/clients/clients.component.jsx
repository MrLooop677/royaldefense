"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Container } from "@mui/material";

const OurClients = () => {
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
    <Box mt={8}>
      <Typography align="center" variant="h3" mb={2}>
        Our Clients
      </Typography>

      <Container>
        <Slider {...settings}>
          <div>
            <img src={`https://picsum.photos/600/300/?image=${36}`} />
          </div>
          <div>
            <img src={`https://picsum.photos/600/300/?image=${80}`} />
          </div>
          <div>
            <img src={`https://picsum.photos/600/300/?image=${35}`} />
          </div>
          <div>
            <img src={`https://picsum.photos/600/300/?image=${72}`} />
          </div>
          <div>
            <img src={`https://picsum.photos/600/300/?image=${91}`} />
          </div>
          <div>
            <img src={`https://picsum.photos/600/300/?image=${77}`} />
          </div>
        </Slider>
      </Container>
    </Box>
  );
};

export default OurClients;
