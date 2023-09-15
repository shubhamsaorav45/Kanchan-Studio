import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const redirectToLogin = () => {
        // Redirect to the login page
        navigate("/login");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;

        if (!uppercaseRegex.test(password) || !numberRegex.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter and one number');
            return;
        }
        if (password !== confirm_password) {
            setPasswordError('Passwords do not match');
            return;
        }

        const data = {
            fullname: fullname,
            email: email,
            password: password,
            confirm_password: confirm_password
        }
        fetch('http://localhost:8080/studio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })


        setFullname('');
        setConfirmPassword('');
        setEmail('');
        setPassword('');
        setPasswordError('');
        setIsRegistered(true)
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
            <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 min-w-screen max-w-4xl">
                {isRegistered ? (

                    <div className="mb-4 text-green-500 font-bold">
                        Successfully Registered!
                        <button onClick={redirectToLogin} className="text-blue-500 underline cursor-pointer">Login</button>.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <h2 className="text-black font-bold mb-4 text-xl">About you</h2>
                            <div className="mb-4">
                                <button
                                    className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                                >
                                    <img
                                        className="w-6 h-6"
                                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        loading="lazy"
                                        alt="google logo"
                                    />
                                    <span>Login with Google</span>
                                </button>
                            </div>
                            <hr className="w-96 mb-4" />

                            <label htmlFor="FullName" className="block text-gray-700 font-bold mb-2">
                                *Full Name
                            </label>
                            <input
                                type="text"
                                id="FullName"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Full Name"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">
                                *Email address
                            </label>
                            <input
                                type="email"
                                id="Email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="PassWord" className="block text-gray-700 font-bold mb-2">
                                *Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="PassWord"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg
                                            className="w-6 h-6 text-gray-600 cursor-pointer"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* Eye icon for hiding password */}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.5 15s3.5-3.5 5.5-5.5a8 8 0 0110 0c2 2 5.5 5.5 5.5 5.5"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-6 h-6 text-gray-600 cursor-pointer"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* Eye-slash icon for revealing password */}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.6 17.6a9 9 0 11-12.72-12.72"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ConfirmPassword" className="block text-gray-700 font-bold mb-2">
                                *Confirm Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="ConfirmPassword"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Confirm Password"
                                value={confirm_password}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>


                        <div className="flex items-center justify-between">
                            <button
                                className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                               
                            >
                                Register
                            </button>
                        </div>
                    </form>
                )}
            </div>

        </div>
    );
};

export default Register;
