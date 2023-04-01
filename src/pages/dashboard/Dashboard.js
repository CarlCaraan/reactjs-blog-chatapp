import React, { useState } from "react";

// Custom hooks
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

// Styles
import "./Dashboard.css";
import ProjectList from "../../components/ProjectList";
import ProjectFilter from "./ProjectFilter";

function Dashboard() {
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();

  const changeFilter = (newfilter) => {
    setCurrentFilter(newfilter);
  };

  const projects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assigedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assigedToMe = true;
              }
            });
            return assigedToMe;
          case "development":
          case "design":
          case "sales":
          case "marketing":
            // console.log(document.category, currentFilter);
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {document && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
}

export default Dashboard;
