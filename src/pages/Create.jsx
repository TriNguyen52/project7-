import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./../client";

import Crewmates from "./../assets/crewmates.43d07b24.png";
import Form from "../Components/Form";
import "./create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Add this line
  const navigate = useNavigate();

  const createCrewmate = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("Crew")
      .insert({
        name: name,
        speed: speed,
        color: color,
      });

    if (error) {
      console.error("Error inserting crewmate:", error.message);
      setErrorMessage("Failed to create crewmate: " + error.message); // Set error message here
    } else {
      setErrorMessage(""); // Clear error message on success
      alert("Success! Crewmate created.");
      navigate("/gallery");
    }
  };

  return (
    <div className="create-page">
      <h1 className="create-title">Create a New Crewmate</h1>
      <img src={Crewmates} alt="crewmates" className="crewmates-image" />

      <form id="createCrew" onSubmit={createCrewmate} className="create-form">
        <Form setName={setName} setSpeed={setSpeed} setColor={setColor} />
        <button type="submit" className="create-button">
          Create Crewmate
        </button>
      </form>

      {/* Display error message if any */}
      {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
    </div>
  );
};

export default Create;
