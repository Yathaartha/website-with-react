import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";
import About from "./About";

// Re-usable componnets
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import Clients from "../Common/Clients";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="Tell me more"
          link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Clients />
      </div>
    );
  }
}

export default Home;
