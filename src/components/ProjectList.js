import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./ProjectList.css";

// Components
import Avatar from "../components/Avatar";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === <p>No projects yet.</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
