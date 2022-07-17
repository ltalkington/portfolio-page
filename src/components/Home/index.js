import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [
    " ",
    "L",
    "o",
    "g",
    "a",
    "n",
    " ",
    "T",
    "a",
    "l",
    "k",
    "i",
    "n",
    "g",
    "t",
    "o",
    "n",
  ];
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="animationLetters">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h1 className="phoneAnimationLetters">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Web Development, Embedded Systems, and Backend Development</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME HERE
          </Link>
        </div>
        <Logo />
        <div className="logos">
          <a
            href="https://www.linkedin.com/in/logantalkington/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>

          <a
            href="https://github.com/ltalkington"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCTMbDB12HkwaPcBj7Z389Fw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </div>
      </div>

      <Loader type="ball-spin-fade-loader" />
    </>
  );
};

export default Home;
