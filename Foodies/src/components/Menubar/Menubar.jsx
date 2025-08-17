import React from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Menubar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to="/"> <img src={assets.logo} alt="" className='mx-4' height={48} width={48} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4">
            <button className="btn btn-outline-primary">Login</button>
            <button className="btn btn-outline-success">Register</button>
            <div className="position-relative">
              <img src={assets.cart} alt="" className='position-relative ' height={60} width={60} />
              <span className="position-absolute top-0 start-50 badge rounded-pill bg-warning">
              5  
              </span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Menubar