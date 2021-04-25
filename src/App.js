import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper.js";
import Home from "./components/pages/Home.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route path="/" component={Home} exact={true} />
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
