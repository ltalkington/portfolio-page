import { useEffect, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm a software developer that is continually learning. I hold three
            degrees a bachelors in Business Management, a bachelors in Computer
            Science, and an MBA.
          </p>
          <p align="LEFT">
            I have been developing software for around 5 years. My software
            ranges from automation scripts, full stack applications, and work on
            embedded systems. Some of the languages I have worked in are C++,
            Javascript, Python, SQL, Perl, MASM, and Go. The frameworks I have
            used are React, Django, and Flask.
          </p>
          <p>
            I am passionate about any type of software as I love solving
            problems. I have extensive work on teams and being an individual
            contributor, as well. Being a former athlete and working on agile
            software teams has shaped my ability to create with others. As well,
            I strive to complete side projects using agile to learn and grow.
          </p>
          <p>
            I look forward to discussing any opportunities in the future and
            building further connections. For more job related experience please
            refer to my LinkedIn and Resume.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
