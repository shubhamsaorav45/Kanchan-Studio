import React from 'react'

const Navbar = () => {
    return (
      <nav className="bg-gray-800 " >
        <div className="container mx-auto flex justify-between p-1">
          <a href="/" className="text-white text-2xl font-bold">KANCHAN STUDIO</a>
          <ul className="flex items-center ">
            <li>
              <a href="/about" className="text-white px-2">About</a>
            </li>
            <li>
              <a href="/contact" className="text-white px-2">Contact</a>
            </li>
            <li>
            <a href="/register" className="text-white px-2">Register</a>
          </li>
          <li>
            <a href="/login" className="text-white px-2">Login</a>
          </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;