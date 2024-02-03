"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { CardTitle, CardDesc } from "./aboutus.styles";
const AboutUs = () => {
  return (
    <Container mt={5}>
      <Typography align="center" variant="h3" mb={2}>
        Corporate Value
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                height: "240px",
                justifyContent: "center",
              }}
            >
              <CardTitle
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                fontWeight="bold"
              >
                TEAM WORK
              </CardTitle>
              <CardDesc variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </CardDesc>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                height: "240px",
                justifyContent: "center",
              }}
            >
              <CardTitle
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                fontWeight="bold"
              >
                TEAM WORK
              </CardTitle>
              <CardDesc variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </CardDesc>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                height: "240px",
                justifyContent: "center",
              }}
            >
              <CardTitle
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                fontWeight="bold"
              >
                TEAM WORK
              </CardTitle>
              <CardDesc variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </CardDesc>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                height: "240px",
                justifyContent: "center",
              }}
            >
              <CardTitle
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                fontWeight="bold"
              >
                TEAM WORK
              </CardTitle>
              <CardDesc variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </CardDesc>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                height: "240px",
                justifyContent: "center",
              }}
            >
              <CardTitle
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                fontWeight="bold"
              >
                TEAM WORK
              </CardTitle>
              <CardDesc variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </CardDesc>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                height: "240px",
                justifyContent: "center",
              }}
            >
              <CardTitle
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                fontWeight="bold"
              >
                TEAM WORK
              </CardTitle>
              <CardDesc variant="body2" color="text.secondary">
                Description about the company. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer sodales.
              </CardDesc>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
