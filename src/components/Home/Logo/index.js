import { useEffect, useRef } from "react";
import Loader from "react-loaders";

import LogoS from "../../../assets/images/l3.png";
import "./index.scss";

const Logo = () => {
  return (
    <>
      <div className="move-me">
        <img className="solid-logo" src={LogoS} alt="JavaScript,  Developer" />
      </div>
    </>
  );
};

export default Logo;
