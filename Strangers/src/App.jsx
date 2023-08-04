import { Routes, Route, Link } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to={"/Home"}>
            <h1>HomePage</h1>
          </Link >
          <Link to={"/Posts"}>
            <h1>Posts</h1>
          </Link>
        </div>

        <div id="main-section">{ }
          <Routes>
            <Route path="/Home" element={<h1>HomePage</h1>} />
            <Route path="/Home" element={<h1>Posts</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
