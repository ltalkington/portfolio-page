import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import data from "../../data/portfolio.json";
import Quoridor from "./Quoridor.png";
import MKLT from "./MKLT.png";
import PropLurk from "./PropLurk.png";
import Wedding from "./wedding.png";
import exercise from "./exercise.png";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const renderPortfolio = (portfolio) => {
    let pics = [Quoridor, MKLT, PropLurk, Wedding, exercise];
    return (
      <div className="images-container">
        {data.portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={pics[idx]}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
