import { useState } from 'react'
import './styles/App.css'
import Banner from './components/Banner'
import Project from './components/Project'

function App() {

  // Should not do it this way because I would like to upgrade and customize each descriptions individually.
  // To give up in next version
  const projects = [
    {
      "title": "BrokerApp",
      "description": "Developed a broker working on a web server using C++ >11, ASIO library, STL algorithms and Catch2 test framework. Implementation of share allocation management following the CME Group standard.",
      "link": "https://github.com/alchekroun/BrokerApp"
    },
    {
      "title": "GetGreeks",
      "description": "Conceived an application to offer risk coverage with the Greeks of the Black Scholes model.",
      "link": "https://github.com/alchekroun/getGreeks"
    }
  ]

  return (
    <>
      <Banner />
      <div className="container">

        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </>
  )
}

export default App
