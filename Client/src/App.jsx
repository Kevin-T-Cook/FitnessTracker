import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import CreateWorkout from './components/CreateWorkout';
import WorkoutHistory from './components/WorkoutHistory';
import Progress from './components/Progress';
import Nutrition from './components/Nutrition';


function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-workout" element={<CreateWorkout />} />
        <Route path="/workout-history" element={<WorkoutHistory />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>
    );
}

export default App
