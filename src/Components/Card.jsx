// Card.jsx
import outline from "./../assets/ce385016.png";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ crewmate }) => {
  if (!crewmate) return <p>Crewmate not found</p>; // Fallback in case crewmate is not found

  return (
    <div className="card">
      <Link to={`/${crewmate.id}`}>
        <div className="space-y-3">
          <img src={outline} alt="outline" width="200" className="mx-auto" />
          <p>Name of Crewmate: <span>{crewmate.name}</span></p>
          <p>Speed of Crewmate: <span>{crewmate.speed} mph</span></p>
          <p>Color of Crewmate: <span>{crewmate.color}</span></p>
        </div>
      </Link>

      <button className="my-6">
        <Link to={`/${crewmate.id}/edit`}>Edit Crewmate</Link>
      </button>
    </div>
  );
};

export default Card;
