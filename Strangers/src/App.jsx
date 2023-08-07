import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Postage from "./Posts";
import Homepage from './Home';
import Logger from './Login';

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to={'/Home'}style={{ color: "#14cebe" }}>
            <h1>HomePage</h1>
          </Link >
          <Link to={"/Posts"}style={{ color: "#14cebe" }}>
            <h1>Posts</h1>
          </Link>
          <Link to={'/Login'}style={{ color: "#14cebe" }}>
            <h1>Login</h1>
          </Link>
        </div>

        <div id="main-section">{ }
          <Routes>
            <Route path='/Home' element={<Homepage />} />
            <Route path='/Posts' element={<Postage />} />
            <Route path='/Login' element={<Logger />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
