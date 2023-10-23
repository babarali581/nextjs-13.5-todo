import React  from 'react';
import { useRouter } from 'next/router';
import '../app/globals.css'

function Dashboard({ username }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-500 p-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {username}!</h1>
        
        <div className="mt-4">
          <p className="text-gray-600 mb-8">You've successfully logged in. Enjoy your session!</p>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
