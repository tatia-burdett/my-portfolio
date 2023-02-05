import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Grid, Container } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigation } from 'react-router-dom';

export default function Home() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#E0FF4F",
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Container
          sx={{
            borderRight: 1,
            borderTop: 1,
            p: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <p className="header-p">Hello, my name is</p>
            <h1>Tatia Burdett</h1>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "JavaScript",
                    "React",
                    "Django",
                    "Python",
                    "SQL",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h2>
          </Grid>
          <Grid item>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Test"
              textColor="primary"
              orientation="vertical"
            >
              <Tab value="1" label="LodgeLog" component={Link} to="/projects/lodgelog"/>
              <Tab value="2" label="Hello World" component={Link} to="/projects/helloworld"/>
              <Tab value="3" label="Simply Weather" component={Link} to="/projects/simplyweather"/>
            </Tabs>
          </Grid>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}
