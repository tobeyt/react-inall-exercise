import React from "react";
import "./home.less";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>在线实用工具</div>
      <Link to="/calculator">计算器</Link>
      <br />
      <Link to="/timer">倒计时器</Link>
    </div>
  );
};

export default Home;
