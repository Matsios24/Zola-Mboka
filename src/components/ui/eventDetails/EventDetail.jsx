import { useParams } from "react-router-dom";
import articles from "../../../pages/aricles.json";
import Articles from "../../Articles/Articles";

const EventDetail = () => {
  const { id } = useParams();
  const event = articles.find((a) => a.id.toString() === id);

  if (!event) return <p>Événement introuvable.</p>;

  return (
    <>
      <Articles
        image={event.image}
        evenement={event.evenement}
        description={event.description}
        lieu={event.lieu}
        heure={event.heure}
        date={event.date}
      />
    </>

  );
};

export default EventDetail;
