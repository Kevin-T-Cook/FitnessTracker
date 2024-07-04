import React, { useState } from 'react'

function ExerciseSet({ exerciseName, sets, reps, weight, notes }) {
    return (
      <div className="border rounded p-2 mb-2">
        <div className="flex justify-between">
          <h3>{exerciseName}</h3>
          <span className="text-gray-500">Sets: {sets}</span>
        </div>
        <div className="flex space-x-4">
          <span>Reps: {reps}</span>
          <span>Weight: {weight}</span>
        </div>
        {notes && <p className="text-gray-500 mt-2">{notes}</p>}
      </div>
    );
  }

export default ExerciseSet
