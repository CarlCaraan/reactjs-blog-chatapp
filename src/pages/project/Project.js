import React from "react";
import { useParams } from "react-router-dom";

// Custom Hooks
import { useDocument } from "../../hooks/useDocument";

// Styles and components
import "./Project.css";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";

function Project() {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  // Error Template
  if (error) {
    return <div className="error">{error}</div>;
  }

  // Loading Template
  if (!document) {
    return (
      <div className="loader">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path
              fill="#8D69F1"
              d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
            ></path>
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path
              fill="#8D69F1"
              d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
            ></path>
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path
              fill="#8D69F1"
              d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
            ></path>
          </svg>
        </span>
      </div>
    );
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}

export default Project;
