// Details.jsx
import { useParams, Link } from "react-router-dom";
import suspect from "./../assets/suspect.bdfacc7e.png";
import "./details.css";
const Details = ({ crew }) => {
  const { id } = useParams();
  const mate = crew.find((item) => item.id === parseInt(id));

  if (!mate) {
    return <p className="text-white text-center text-4xl mt-10">Crewmate not found or data is loading...</p>;
  }

  return (
    <div className="page">
      <h1>Crewmate: {mate.name}</h1>
      <h2 className="text-5xl my-3">Stats:</h2>
      <div className="text-3xl">
        <p className="my-3">Color: {mate.color}</p>
        <p>Speed: {mate.speed} mph</p>
        {mate.speed > 70 ? (
          <p className="mt-20">
            Wow, this Crewmate is super fast, that will be helpful! 🏃💨
          </p>
        ) : (
          <p className="mt-20">
            You may want to find a Crewmate with more speed, this one is kind of
            slow 😬
          </p>
        )}
      </div>
      <Link to={`/${mate.id}/edit`}>
        <button>Want to edit this crewmate?</button>
      </Link>
      <img src={suspect} alt="suspect" width="200" />
    </div>
  );
};

export default Details;
