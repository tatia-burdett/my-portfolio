import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Grid
      container
      direction='column'
      justifyContent="center"
      alignItems="center"
      height='100vh'
    >
      <p className="header-p">Hello, my name is</p>
      <h1>Tatia Burdett</h1>
      <h2>
        <Typewriter
          options={{
            strings: [
              "Full Stack Web Developer",
              "Musician",
              "Photographer",
              "Traveler",
              "Mother",
              "Yoga Lover",
              "Philosopher",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
          }}
        />
      </h2>
    </Grid>
  );
}
