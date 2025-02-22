import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold">Welcome to QUICKCRAVE</h1>
      <p className="text-lg mt-4">Your go-to place for delicious cravings!</p>
      <div className="mt-6 space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={() => navigate("/login")}>Login</button>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Home;
