import React from "react";
import Lottie from "lottie-react";
import helloAnim from "../assets/hello.json"; // Download from lottiefiles
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home-container">
      <div className="animation-box">
        <Lottie animationData={helloAnim} loop={true} />
      </div>
      <h2>📞 Welcome to Call Log CRM</h2>
      <p>Easily manage and track your customer calls.</p>
      <Link to="/report">
        <button className="cta-button">Log a New Call</button>
      </Link>
    </div>
  );
}

export default Home;
