import React from "react";
import style from "./heroSection.module.css";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.primaryContainer}>
        <h1 className={style.title}>
          Zola <br /> Mboka
        </h1>

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
