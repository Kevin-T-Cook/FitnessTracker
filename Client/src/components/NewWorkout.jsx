import React from 'react';

function NewWorkout() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="new-workout">
      <label htmlFor="workoutName">Workout Name:</label>
      <input type="text" id="workoutName" name='workoutName' placeholder='Monday Pull'/>
      <h2>Date: {today}</h2>
      <form>
        <label htmlFor="exercise">Exercise:</label>
        <input type="text" id="exercise" name="exercise" placeholder='Bench Press' />
        <br />
        <label htmlFor="sets">Sets:</label>
        <input type="number" id="sets" name="sets" placeholder='3'/>
        <br />
        <label htmlFor="reps">Reps:</label>
        <input type="number" id="reps" name="reps" placeholder='10'/>
        <br />
        <button type="submit">Save Exercise</button>
      </form>
    </div>
  );
}

export default NewWorkout
