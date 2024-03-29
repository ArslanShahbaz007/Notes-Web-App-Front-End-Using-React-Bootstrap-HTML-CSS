import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    Link,
    NavLink
  } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handlelogout = ()=>{
     localStorage.clear();
     navigate("/login");

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      MyNotes
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        
      </ul>
      {!localStorage.getItem('token')? <form className="d-flex" >
      <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign up</Link>
      </form>: <button className='btn btn-primary' onClick={handlelogout}>Logout</button>}
    </div>
  </div>
</nav>

  )
}

export default Navbar


