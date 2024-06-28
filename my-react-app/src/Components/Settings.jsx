import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Settings = () => {
  const [ProjectPage, setProjectPage] = useState("");
  const history = useHistory();

  const handleAddProject = () => {
    if (ProjectPage) {
      // Add the project (this can be a function that saves the project to a state, a database, etc.)
      // For demonstration purposes, we simply log the project name
      console.log("Project added:", ProjectPage);
      // Redirect to the projects page
      history.push("/projects");
    }
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Project Name:
          <input
            type="text"
            value={ProjectPage}
            onChange={(e) => setProjectPage(e.target.value)}
          />
        </label>
        <button onClick={handleAddProject}>Add Project</button>
      </div>
    </div>
  );
};

export default Settings;
