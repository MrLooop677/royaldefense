import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import cardsicon from "../../../public/images/cardsicon.jpg";
// import partnerImage from "../../../public/images/img.png";
import partner1 from "../../../public/images/partner1.jpeg";
import partner2 from "../../../public/images/partner2.jpeg";
import partner3 from "../../../public/images/partner3.jpeg";
import partner4 from "../../../public/images/partner4.jpeg";
import partner5 from "../../../public/images/partner5.jpeg";
import partner6 from "../../../public/images/partner6.jpeg";
import { AccountCircle } from "@mui/icons-material"; // Import the icon you want to use
const OurPartnersGallery = () => {
  // Sample partner data
  const partners = [
    {
      id: 1,
      name: "Video Surveillance systems",
      image: partner1.src,
      desc: "We have extensive expertise in creating and implementing highly advanced and smart CCTV systems, taking the finest solutions available and making them even more customized to meet the unique needs of each client and seamlessly integrate into any environment or enterprise. This includes large-scale deployments such as healthcare facilities, factories, financial institutions, municipal monitoring, shopping complexes, and more. Our solutions are tailored to maximize security and functionality for the specific setting.",
    },
    {
      id: 2,
      name: "Access Control Systems2",
      image: partner2.src,
      desc: "We have the ability to create access control integration solutions for better administration of our client’s company operations. Photo Identification System, Time Attendance System Visitors Management System, proximity readers.",
    },
    {
      id: 3,
      name: "Public Address & Sound Systems",
      image: partner3.src,
      desc: "We are surrounded by audio-visual technology. AV systems truly make the world go round, from our entertainment systems to our business such as conference halls, theaters, clubs, Simply said, audio-visual technology broadcasts both visual and audible content in sync. These technologies essentially collaborate to ensure that the image matches the sound and that the sound matches the image.",
    },
    {
      id: 4,
      name: "VEHICLES IDENTIFICATION SYSTEM",
      image: partner3.src,
    },
    {
      id: 5,
      name: "Gate Barrier",
      image: partner3.src,
    },
    {
      id: 6,
      name: "PEDESTRIAN ENTRANCE GATES",
      image: partner3.src,
    },
  ];

  return (
    <Box mt={5}>
      <Container>
        <Typography align="center" variant="h3" mb={2}>
          Solutions
        </Typography>
        <Grid container spacing={3}>
          {partners.map((partner) => (
            <Grid key={partner.id} item xs={4}>
              <Card sx={{ height: "500px", borderRadius: "7%", p: 2 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img
                    src={cardsicon.src}
                    alt="icon"
                    style={{ width: "20px" }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      marginTop: "10px",
                      marginLeft: "10px",
                    }}
                    align="center"
                    gutterBottom
                  >
                    {partner.name}
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" align="start" gutterBottom>
                  {partner.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPartnersGallery;
