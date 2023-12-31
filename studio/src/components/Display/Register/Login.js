import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); // State to track login error
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/studio/login?email=${email}&password=${password}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); 
      })
      .then(data => {
        if (data === 'Login Successful') {
          console.log('Login Successful');
          navigate("/");
        } else {
          console.error('Login Failed');
          setLoginError('Login Failed'); // Set login error message
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

    setEmail('');
    setPassword('');
  };

  const handleRegisterClick = () => {
    navigate("/register"); 
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md sm:w-96 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {/* Login Error Message */}
        {loginError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {loginError}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <button
            className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0"
            type="submit"
          >
            Sign In
          </button>
          <div className="flex">
            <button
              className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 sm:mt-0 sm:ml-2"
              type="button"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
