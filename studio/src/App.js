import React from 'react'
import './App.css';
import Register from './components/Display/Register/Register';
import Navbar from './components/Display/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../src/components/Display/Register/Login';
import About from './components/Header/Home/About';
import Contact from './components/Header/Home/Contact';
import Home from './components/Header/Home/Home';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
<Footer/>

    </div >
  )
}

export default App
