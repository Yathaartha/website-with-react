import React, { Component } from "react";
import Client from "./Client";
import logo1 from "../assets/img/logos/envato.jpg";
import logo2 from "../assets/img/logos/designmodo.jpg";
import logo3 from "../assets/img/logos/themeforest.jpg";
import logo4 from "../assets/img/logos/creative-market.jpg";

const clients = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo4 },
];

class Clients extends Component {
  render() {
    return (
      <div className="py-5">
        <div className="container">
          <div className="row">
            {clients.map((client, index) => {
              return <Client {...client} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
