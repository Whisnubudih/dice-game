import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import successAlert from '../hooks/successAlert';

function NavbarHome () {
  const navigate = useNavigate()

  const logouthandler = () =>{
    localStorage.clear()
    navigate('/login')
    successAlert('THANK YOU FOR COMING TO DICE GAME');
  }
  return (
    <div className="navbar">

    <div className='navbar-title-container'>
    <div className="navbar-text" >
        <h2>DICE GAME</h2>
      </div>
    <Link to="/" className="navbar-text" >Home</Link>

   
    </div>
    <div className="navbar-text" >
     
    <button onClick={() => {
                  logouthandler()
                  }} className="nav-button">
    <p className="table-button-text" >Log Out</p>
    </button>

    </div>
  </div>
 
    )
   
}

  export default  NavbarHome; 