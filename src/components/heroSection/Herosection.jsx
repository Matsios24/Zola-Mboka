import React from "react";
import style from "./heroSection.module.css";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.primaryContainer}>
        <div className={style.wavecontainer}>
          <h1 className={style.wavetext}>
            <span>Z</span>
            <span>O</span>
            <span>L</span>
            <span>A</span>
            <br />
            <span>M</span>
            <span>B</span>
            <span>O</span>
            <span>K</span>
            <span>A</span>
          </h1>
        </div>

        <h6 className={style.leadtext}>
          Venez admirez le talent <br /> na Mboka ya Bisooooo !!!!!
        </h6>

        <div className={style.callAction}>
          <Link to="/showEvent">Parcourez </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
