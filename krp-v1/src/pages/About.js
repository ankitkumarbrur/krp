import React from "react";
import {
  Navbar,
  Footer,
  Main_header,
  Our_journey,
  Group_structure,
  Our_team,
  Our_message,
} from "../components";
import "./styles/about.scss";

const About = () => {
  return (
    <main>
      <Navbar />
      <Main_header />
      <Our_journey />
      <Group_structure />
      <Our_team />
      <Our_message />
      <Footer />
    </main>
  );
};

export default About;
