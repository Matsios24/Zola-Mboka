import style from "./style/home.module.css";
import Herosection from "../components/heroSection/Herosection";
import Articles from "../components/Articles/Articles";
import { Link } from "react-router-dom";
import article from "./aricles.json";

const Home = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.primarySection}>
        <Herosection />
      </div>
      <div className={style.secondarySection}>
        <h1>Evenement</h1>
        {article.map((data) => (
          <Link key={data.id} to={`premiumEvents/${data.id}`}>
            <Articles
              image={data.image}
              evenement={data.evenement}
              description={data.description}
              lieu={data.lieu}
              heure={data.heure}
              date={data.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
