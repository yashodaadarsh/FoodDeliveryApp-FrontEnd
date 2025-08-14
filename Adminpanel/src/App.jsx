import React, { useState } from 'react'
import AddFood from './pages/AddFood/AddFood'
import ListFood from './pages/ListFood/ListFood'
import Sidebar from './components/Sidebar/Sidebar'
import Menubar from './components/Menubar/Menubar'
import { Routes , Route } from 'react-router-dom'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify'



const App = () => {

    const [sidebar,setsidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setsidebarVisible( prev => !prev );
    }

  return (
    <div className="d-flex" id="wrapper">
            
            <Sidebar sidebarvisible = {sidebar} />

            <div id="page-content-wrapper">

                <Menubar toggleSidebar = {toggleSidebar} />
                <ToastContainer />
                
                <div className="container-fluid">
                    <Routes>
                        <Route path = '/add' element={ <AddFood /> } />
                        <Route path = '/list' element={ <ListFood /> } />
                        <Route path = '/orders' element={ <Orders /> } />
                        <Route path = '/' element={ <ListFood /> } />
                    </Routes>
                </div>
            </div>
        </div>
  )
}

export default App