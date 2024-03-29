import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Grid, Container, Tabs, Tab } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

import "./App.css";
import Home from "../../routes/Home/Home";
import Contact from "../../routes/Contact/Contact";
import About from "../../routes/About/About";
import Projects from "../../routes/Projects/Projects";
import LodgeLog from "../../routes/Projects/LodgeLog/LodgeLog";
import HelloWorld from "../../routes/Projects/HelloWorld/HelloWorld";
import SimplyWeather from "../../routes/Projects/SimplyWeather/SimplyWeather";

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

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Container>
          <Grid container height="100vh" alignItems="center">
            <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              Home
            </Grid>
            <Grid item xs={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/lodgelog" element={<LodgeLog />} />
                <Route path="projects/helloworld" element={<HelloWorld />} />
                <Route
                  path="projects/simplyweather"
                  element={<SimplyWeather />}
                />
              </Routes>
            </Grid>
            <Grid item xs={4}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Test"
                textColor="primary"
                orientation="vertical"
              >
                <Tab
                  value="1"
                  label="LodgeLog"
                  component={Link}
                  to="/projects/lodgelog"
                />
                <Tab
                  value="2"
                  label="Hello World"
                  component={Link}
                  to="/projects/helloworld"
                />
                <Tab
                  value="3"
                  label="Simply Weather"
                  component={Link}
                  to="/projects/simplyweather"
                />
              </Tabs>
            </Grid>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
