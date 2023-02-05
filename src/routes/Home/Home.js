import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
