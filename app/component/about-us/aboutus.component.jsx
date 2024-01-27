"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const AboutUs = () => {
  return (
    <Container mt={3}>
      <Typography align="center" variant="h3" mb={2}>
        About Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x140"
              alt="Company Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Company Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x140"
              alt="Company Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Company Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/300x140"
              alt="Company Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Company Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
