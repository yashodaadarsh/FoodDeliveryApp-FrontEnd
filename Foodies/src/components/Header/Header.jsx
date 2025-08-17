import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded mt-1">
        <div className="container-fluid py-5">
            <h1 className=' fw-bold'>Order your favourite food here</h1>
            <p className="col-md-8 fs-4">Display the best foods and drinks in Bengaluru</p>
            <Link to="/explore" className='btn btn-primary '>Explore</Link>
        </div>
    </div>
  )
}

export default Header