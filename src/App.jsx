import { useState } from 'react'
import './styles/App.css'
import './styles/Project.css'
import Banner from './components/Banner'
import { Box, Grid } from '@mui/material'

function App() {

  // Should not do it this way because I would like to upgrade and customize each descriptions individually.
  // To give up in next version
  const projects = [
    {
      "title": "GameOfLife",
      "description": "Recreated Conway's Game Of Life. Using C++. I separated the GUI from the Logic, the logic is calculating generations in one thread and send it to the GUI that read and display them in another thread.",
      "link": "https://github.com/alchekroun/GameOfLife",
      "illustration": "gameoflife_demo.gif"
    }
  ]

  return (
    <>
      <Banner />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="container"
      >
        <Grid item xs={12} md={6}>
          <Box className="project">
            <h2>BrokerApp</h2>
            <p>
              Developed a broker working on a web server using modern C++, ASIO library, STL algorithms and Catch2 test framework. Implementation of share allocation management following the CME Group standard.
            </p>
            <a href={"#"} target="_blank" rel="noopener noreferrer" className="github-link">
              <img src={"github-mark.svg"} alt="GitHub Logo" className="github-logo" />
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="project">
            <h2>GetGreeks</h2>
            <p>
              Conceived an application to offer risk coverage with the Greeks of the Black Scholes model.
            </p>
            <a href={"#"} target="_blank" rel="noopener noreferrer" className="github-link">
              <img src={"github-mark.svg"} alt="GitHub Logo" className="github-logo" />
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <a href='https://github.com/alchekroun/snek'>
            <Box className="project" sx={{ backgroundImage: `url('snek_demo.gif')` }}>
              <h2 className='fadeText'>Snek</h2>
              <p className='fadeText'>
                My very first game in C++ 11.
              </p>
            </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={6}>
          <a href='https://github.com/alchekroun/GameOfLife'>
            <Box className="project" sx={{ backgroundImage: `url('gameoflife_demo.gif')` }}>
              <h2 className='fadeText'>Game Of Life</h2>
              <p className='fadeText'>
                Recreated Conway's Game Of Life. Using C++. I separated the GUI from the Logic, the logic is calculating generations in one thread and send it to the GUI that read and display them in another thread.
              </p>
            </Box>
          </a>
        </Grid>
      </Grid>
    </>
  )
}

export default App
