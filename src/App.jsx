// App.jsx
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import { supabase } from "./client";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";
import Details from "./pages/Details";
import Edit from "./pages/Edit";

function App() {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("Crew")
        .select()
        .order("created_at", { ascending: true });

      setCrew(data || []); // Ensure crew is always an array
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="app-container min-h-screen overflow-x-hidden bg-gray-900">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery crew={crew} />} />

          {/* Pass crew array directly to Details and Edit */}
          <Route path="/:id" element={<Details crew={crew} />} />
          <Route path="/:id/edit" element={<Edit crew={crew} />} />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <p className="text-white text-center text-4xl mt-10">
                404 Page Not Found
              </p>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
