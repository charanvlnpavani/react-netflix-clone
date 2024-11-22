import React from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";

import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero_banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero_title" className="caption-img" />
          <p>
            Blinded by love, Hakan disregards his training and his duties as the
            Protector. Leyla informs him that an Immortal's blood contains a
            secret power.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="play_icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="info_icon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="moreCards">
        <TitleCards title={"Blockbuster Movies"} category="popular" />
        <TitleCards title={"Top Rated"} category="top_rated" />
        <TitleCards title={"Upcoming Movies"} category="upcoming" />
        <TitleCards title={"Recently"} category="now_playing" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
