import React from "react";
import { CiClock1, CiCalendar, CiLocationOn } from "react-icons/ci";
import style from "./article.module.css";
const Articles = ({ image, evenement, description, lieu, heure, date }) => {


  return (
    <div className={style.mainContainer}>
      <div className={style.imageEvent}>
        <img src={image} alt="evenement" />
      </div>

      <div className={style.eventDetail}>
        <h1 className={style.eventTitle}>{evenement}</h1>

        <div className={style.eventLocation}>
          <p className={style.eventDate}>
            <CiClock1 />
            {heure}
          </p>
          <p className={style.date}>
            <CiCalendar />
            {date}
          </p>
        </div>
        <p className={style.eventLieu}>
          <CiLocationOn />
          {lieu}
        </p>

        <p className={style.eventDescription}>{description}</p>
        <button> Details </button>
      </div>
    </div>
  );
};

export default Articles;
