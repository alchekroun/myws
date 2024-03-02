import React from 'react';
import '../styles/Project.css';
import githubLogo from '../assets/github-mark.svg';

function Project({ title, description, githubLink }) {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
      </a>
    </div>
  );
}

export default Project;