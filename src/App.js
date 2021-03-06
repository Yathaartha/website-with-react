import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
