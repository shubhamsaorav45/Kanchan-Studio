import React, { useState } from 'react';

const Register = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [result, setResult] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fullname: fullname,
            email: email,
            password: password,
            ConfirmPassword: ConfirmPassword
        }
        setResult([data, ...result])
        setFullname('')
        setConfirmPassword('')
        setEmail('')
        setPassword('')

    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
            <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 min-w-screen max-w-4xl">
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
                        <input
                            type="password"
                            id="PassWord"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ConfirmPassword" className="block text-gray-700 font-bold mb-2">
                            *Confirm Password
                        </label>
                        <input
                            type="password"
                            id="ConfirmPassword"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Confirm Password"
                            value={ConfirmPassword}
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
            </div>
            <p>
                {result.map((item, index) => {
                    return <div key={index}>
                        <li >{item.fullname}</li>
                        <li >{item.email}</li>
                        <li >{item.password}</li>
                        <li >{item.ConfirmPassword}</li>
                    </div>
                })}
            </p>
        </div>
    );
};

export default Register;
