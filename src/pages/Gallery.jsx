import { useState, useEffect } from "react";
import { supabase } from "./../client";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import "./gallery.css";

const Gallery = () => {
  const [crew, setCrew] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch crewmates from Supabase when the component mounts
  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from("Crew") // Use the exact name of your table
        .select("*");

      if (error) {
        console.error("Error fetching crewmates:", error.message);
        setErrorMessage("Failed to load crewmates: " + error.message);
      } else {
        setCrew(data || []);
      }
    };

    fetchCrewmates();
  }, []);

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Your Crewmate Gallery!</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {crew && crew.length > 0 ? (
        <div className="gallery-grid">
          {crew.map((crewmate) => (
            <Card key={crewmate.id} crewmate={crewmate} />
          ))}
        </div>
      ) : (
        <div className="no-crewmates">
          <p className="no-crewmates-text">There are no crewmates</p>
          <Link to="/create" className="create-button">
            Create A Crewmate
          </Link>
        </div>
      )}
    </div>
  );
};

export default Gallery;
