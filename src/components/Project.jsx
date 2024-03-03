import React from 'react';
import '../styles/Project.css';
import githubLogo from '../../public/github-mark.svg';
import { Box } from '@mui/material';

const Project = ({ title, description, githubLink }) => {
  return (
    <Box className="card">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
      </a>
    </Box>
  );
}

export default Project;