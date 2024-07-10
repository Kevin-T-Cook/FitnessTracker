import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-custom">
      <div className="logo-container w-full">
        <img
          className="h-64 w-full object-cover"
          src="/src/assets/logo-color.png"
          alt="ascend logo"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          className="h-44 w-full bg-cyan-300 flex items-center justify-center text-5xl"
          onClick={() => navigate('/create-workout')}
        >
          Create Workout
        </button>
        <button
          className="h-44 w-full bg-amber-400 flex items-center justify-center text-5xl"
          onClick={() => navigate('/workout-history')}
        >
          Workout History
        </button>
        <button
          className="h-44 w-full bg-cyan-300 flex items-center justify-center text-5xl"
          onClick={() => navigate('/progress')}
        >
          Progress
        </button>
        <button
          className="h-44 w-full bg-amber-400 flex items-center justify-center text-5xl"
          onClick={() => navigate('/nutrition')}
        >
          Nutrition
        </button>
      </div>
    </div>
  );
}

export default Home;
