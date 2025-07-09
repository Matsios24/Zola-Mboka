import React from "react";
import { useParams } from "react-router-dom";

const PopularEvents = () => {
  const { id } = useParams();
  return <div>PopularEvents{id}</div>;
};

export default PopularEvents;
