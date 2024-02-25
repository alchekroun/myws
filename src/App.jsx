import { useState } from 'react'
import './styles/App.css'
import Banner from './components/Banner'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='card'>
        <Project projectName={"Snek"} gitHubURL={"#"}/>
      </div>
    </>
  )
}

export default App
