import React, { useContext, useState } from 'react'
import './Menubar.css'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import Login from '../Login/Login'
import Register from '../Register/Register'

const Menubar = () => {
  const [active,setActive] = useState("home");
  const {quantities} = useContext(StoreContext);
  const uniqueItemsInCart = Object.values(quantities).filter(qty => qty > 0 ).length;
  const navigate = useNavigate();


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
              <Link className={ active === 'home' ? "nav-link fw-bold active" : "nav-link" } to="/" onClick={() => setActive('home')}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={ active === 'explore' ? "nav-link fw-bold active" : "nav-link" } to="/explore" onClick={() => setActive('explore')}>Explore</Link>
            </li>
            <li className="nav-item">
              <Link className={ active === 'contact-us' ? "nav-link fw-bold active" : "nav-link" } to="/contact" onClick={() => setActive('contact-us')}>Contact us</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4">
            <button className="btn btn-outline-primary" onClick={ () => navigate('/login') } >Login</button>
            <button className="btn btn-outline-success" onClick={ () => navigate('/register') } >Register</button>
            <Link to={`/cart`}>
              <div className="position-relative">
                <img src={assets.cart} alt="" className='position-relative ' height={60} width={60} />
                <span className="position-absolute top-0 start-50 badge rounded-pill bg-warning">
                {uniqueItemsInCart}
                </span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Menubar