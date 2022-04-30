import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar () {
  const navigate = useNavigate()


  return (
    <div className="navbar">
      <div>
        <h2>DICE GAME</h2>
      </div>

    <button className="nav-button">
    <Link to="/register" className="table-button-text" >Sign Up</Link>
    </button>
  </div>
 
    )
   
}

  export default  Navbar; 