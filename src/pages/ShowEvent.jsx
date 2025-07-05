import React from "react";
import Articles from "../components/Articles/Articles";

const ShowEvent = ({ image, title = "mati", description, date, heure }) => {
  return (
    <div>
      <Articles
        image={image}
        title={title}
        description={description}
        date={date}
        heure={heure}
      />
    </div>
  );
};

export default ShowEvent;
