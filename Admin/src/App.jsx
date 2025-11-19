import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes , Route } from 'react-router-dom'
import Add from './components/pages/Add/Add'
import Orders from './components/pages/Orders/Orders'
import List from './components/pages/List/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {


  const url = "https://food-ordering-website-451383526382.europe-west1.run.app/"

  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Orders url={url}/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App