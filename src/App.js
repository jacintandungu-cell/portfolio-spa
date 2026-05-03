import React, { useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Brand Identity", description: "Logo + guidelines" },
    { id: 2, title: "Website Redesign", description: "Responsive UI overhaul" }
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addProject = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    setProjects([...projects, { id: Date.now(), title, description }]);
    setTitle("");
    setDescription("");
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>Creative Agency Portfolio</h1>
      </header>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <form onSubmit={addProject} className="add-form">
        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default App;
