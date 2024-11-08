import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./../client";
import Form from "../Components/Form";
import Crewmates from "./../assets/crewmates.43d07b24.png";
import "./edit.css";

const Edit = ({ crew }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mate, setMate] = useState(null);
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    // Find the crewmate only when `crew` is populated
    if (crew && crew.length > 0) {
      const foundMate = crew.find((item) => item.id === parseInt(id));
      if (foundMate) {
        setMate(foundMate);
        setName(foundMate.name);
        setSpeed(foundMate.speed);
        setColor(foundMate.color);
      }
    }
  }, [crew, id]);

  if (!mate) {
    return <p className="text-white text-center text-4xl mt-10">Crewmate not found or data is loading...</p>;
  }

  const updateInfo = async (e) => {
    e.preventDefault();
    await supabase
      .from("Crew")
      .update({
        name: name,
        speed: speed,
        color: color,
      })
      .eq("id", mate.id);

    alert("Success");
    navigate("/gallery");
  };

  const deleteCrewmate = async (e) => {
    e.preventDefault();
    await supabase.from("Crew").delete().eq("id", mate.id);

    alert("Crewmate deleted");
    navigate("/gallery");
  };

  return (
    <div className="edit-page">
      <h1 className="edit-title">Update Your Crewmate :)</h1>
      <img src={Crewmates} alt="crewmates" width="300" className="edit-image" />
      <p className="edit-subtitle">Current Crewmate Info:</p>
      <p className="edit-info">
        Name: {mate.name}, Speed: {mate.speed}, Color: {mate.color}
      </p>
      <form className="edit-form">
        <Form setName={setName} setSpeed={setSpeed} setColor={setColor} />
        <button onClick={updateInfo} className="edit-update-button">
          Update Crewmate
        </button>
      </form>
      <button className="edit-delete-button" onClick={deleteCrewmate}>
        Delete Crewmate
      </button>
    </div>
  );
};

export default Edit;
