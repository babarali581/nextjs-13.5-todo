"use client"
import React  from 'react';
import './globals.css'

export default function Home() {

    const token = localStorage.getItem('token');

    if (token) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/login";
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 p-5">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="username">Username</label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Type your username" />
        </div>
        
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="password">Password</label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Type your password" />
        </div>
        
        <div className="flex justify-between items-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">LOGIN</button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot password?</a>
        </div>

        <div>
            <span className="text-sm font-medium text-gray-600">Or Sign Up Using</span>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full mt-2 focus:outline-none focus:shadow-outline" type="button">SIGN UP</button>
        </div>
    </div>
</div>

  )
}
