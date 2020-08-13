import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home/Home";
import Calculator from "./Calculator/Calculator";
import Timer from "./Timer/Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Link to="/">Home</Link>
          <br />
          <Link to="/calculator">在线计算器</Link>
          <br />
          <Link to="/timer">在线倒计时器</Link>
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/timer" component={Timer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
