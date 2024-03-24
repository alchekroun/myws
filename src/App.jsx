import { useState } from 'react'
import './styles/App.css'
import './styles/Project.css'
import Banner from './components/Banner'
import { Box, Grid } from '@mui/material'

function App() {

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
          <Box className="project" sx={{ backgroundImage: `url('BrokerApp_demo.gif')` }}>
            <a href='https://github.com/alchekroun/BrokerApp'>
              <h2 className='fadeText'>BrokerApp</h2>
              <p className='fadeText'>
                Developed a broker working on a web server using modern C++, ASIO library, STL algorithms and Catch2 test framework. Implementation of share allocation management following the CME Group standard.
              </p>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="project" sx={{ backgroundImage: `url('getGreeks_demo.gif')` }}>
            <a href='https://github.com/alchekroun/getGreeks'>
              <h2 className='fadeText'>GetGreeks</h2>
              <p className='fadeText'>
                Conceived an application to offer risk coverage with the Greeks of the Black Scholes model.
              </p>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="project" sx={{ backgroundImage: `url('snek_demo.gif')` }}>
            <a href='https://github.com/alchekroun/snek'>
              <h2 className='fadeText'>Snek</h2>
              <p className='fadeText'>
                My very first game in C++ 11.
              </p>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="project" sx={{ backgroundImage: `url('gameoflife_demo.gif')` }}>
            <a href='https://github.com/alchekroun/GameOfLife'>
              <h2 className='fadeText'>Game Of Life</h2>
              <p className='fadeText'>
                Recreated Conway's Game Of Life. Using C++. I separated the GUI from the Logic, the logic is calculating generations in one thread and send it to the GUI that read and display them in another thread.
              </p>
            </a>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default App;
