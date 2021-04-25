import React, { Component } from "react";
import { Link } from "react-router-dom";

class Client extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-6 my-3">
        <Link To="#!">
          <img
            className="img-fluid d-block mx-auto"
            src={this.props.image}
            alt=""
          />
        </Link>
      </div>
    );
  }
}

export default Client;
