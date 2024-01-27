import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const OurPartnersGallery = () => {
  // Sample partner data
  const partners = [
    { id: 1, name: "Partner 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Partner 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Partner 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Partner 4", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Partner 5", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Partner 6", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Partner 7", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Partner 8", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Partner 9", image: "https://via.placeholder.com/150" },
  ];

  return (
    <Box mt={5}>
      <Container>
        <Typography align="center" variant="h3" mb={2}>
          OUR PARTNERS
        </Typography>
        <Grid container spacing={3}>
          {partners.map((partner) => (
            <Grid key={partner.id} item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={partner.image}
                  alt={partner.name}
                />
                <Typography variant="subtitle1" align="center" gutterBottom>
                  {partner.name}
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
