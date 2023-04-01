import React from "react";

// Custom hooks
import { useCollection } from "../../hooks/useCollection";

// Styles
import "./Dashboard.css";
import ProjectList from "../../components/ProjectList";
import ProjectFilter from "./ProjectFilter";

function Dashboard() {
  const { documents, error } = useCollection("projects");

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {document && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}

export default Dashboard;
