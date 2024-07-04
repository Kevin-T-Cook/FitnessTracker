import React, { useState } from 'react';
import ExerciseForm from './ExerciseForm';
import ExerciseSet from './ExerciseSet';

function NewWorkout({ workoutName, onAddExercise }) {
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [exercises, setExercises] = useState([]); // Local state for exercises

  const handleAddExerciseForm = () => {
    setShowExerciseForm(!showExerciseForm);
  };

  const handleSaveExercise = (newExercise) => {
    onAddExercise(newExercise); // Pass new exercise to Home component
    setExercises([...exercises, newExercise]); // Update local state
  };

  return (
    <div className="new-workout">
      <h2>Workout Name: {workoutName}</h2>
      <button onClick={handleAddExerciseForm}>
        {showExerciseForm ? 'Close Exercise Form' : 'Add Exercise'}
      </button>
      {showExerciseForm && <ExerciseForm onAddExercise={handleSaveExercise} />}
      {exercises.length > 0 && (
        <div>
          <h2>Exercises</h2>
          {exercises.map((exercise) => (
            <ExerciseSet key={exercise.id} {...exercise} /> // Pass exercise data as props
          ))}
        </div>
      )}
    </div>
  );
}

export default NewWorkout;
