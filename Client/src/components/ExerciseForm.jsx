import React, { useState } from 'react'

function ExerciseForm({ onAddExercise }) {
    const [exerciseName, setExerciseName] = useState('');
    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState(1);
    const [weight, setWeight] = useState(0);
    const [notes, setNotes] = useState('');
  
    const handleSaveExercise = (e) => {
      e.preventDefault();
      onAddExercise({ exerciseName, sets, reps, weight, notes });
      setExerciseName('');
      setSets(1);
      setReps(1);
      setWeight(0);
      setNotes('');
    };
  
    return (
      <div className="flex flex-col space-y-2">
        <label htmlFor="exercise">Exercise:</label>
        <input
          type="text"
          id="exercise"
          name="exercise"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          placeholder="Bench Press"
        />
        <div className="flex items-center space-x-2">
          <label htmlFor="sets">Sets:</label>
          <input
            type="number"
            id="sets"
            name="sets"
            value={sets}
            onChange={(e) => setSets(parseInt(e.target.value))}
            min={1}
            className="w-12"
          />
          <label htmlFor="reps">Reps:</label>
          <input
            type="number"
            id="reps"
            name="reps"
            value={reps}
            onChange={(e) => setReps(parseInt(e.target.value))}
            min={1}
            className="w-12"
          />
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            className="w-12"
          />
        </div>
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
        <button type="submit" onClick={handleSaveExercise} className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Exercise
        </button>
      </div>
    );
  }

export default ExerciseForm
