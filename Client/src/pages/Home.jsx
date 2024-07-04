import React, { useState, useEffect } from 'react';
import '../App.css';

function Home() {
  const [showNewWorkout, setShowNewWorkout] = useState(false);
  const [workoutName, setWorkoutName] = useState('');
  const [exercises, setExercises] = useState([]); 
  const [showHomePage, setShowHomePage] = useState(false);

  const handleNewWorkoutClick = () => {
    setShowNewWorkout(!showNewWorkout);
  };

  const handleAddExercise = (newExercise) => {
    setExercises([...exercises, newExercise]); 
  };

  const handleSaveWorkout = () => {
    // Implement logic to save workout data (e.g., database)
    console.log('Workout saved:', workoutName, exercises);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomePage(true);
    }, 2000); // Duration of the animation

    return () => clearTimeout(timer);
  }, []);

  if (!showHomePage) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="logo-container">
          <img src="/src/assets/logo-color.png" alt="ascend logo" />
        </div>
      </div>
    );
  }

  return (
    <div className="home-container flex flex-col items-center justify-start min-h-screen bg-gray-100">
      <div className="logo-container mb-10">
        <img src="/src/assets/logo-color.png" alt="ascend logo" />
      </div>
      <button
        onClick={handleNewWorkoutClick}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        NEW WORKOUT
      </button>
      {showNewWorkout && (
        <NewWorkout
          workoutName={workoutName}
          onAddExercise={handleAddExercise}
        />
      )}
      {exercises.length > 0 && ( 
        <div className="workout-list w-full mt-10 bg-white rounded shadow-md p-4">
          <h2>Workouts</h2>
          {exercises.map((exercise) => (
            <div key={exercise.id} className="workout-item border-b p-2 mb-2">
              <h3>{exercise.workoutName}</h3> {/* Assuming workoutName in exercise */}
              {exercise.sets.map((set, index) => ( // Render each set within exercise
                <ExerciseSet key={index} {...set} /> // Pass set data as props
              ))}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={handleSaveWorkout}
        disabled={exercises.length === 0}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
      >
        Save Workout
      </button>
    </div>
  );
}

export default Home;
