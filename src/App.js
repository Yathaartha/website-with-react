import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper.js";
import Home from "./components/pages/Home.js";

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Home />
      </PageWrapper>
    );
  }
}

export default App;
