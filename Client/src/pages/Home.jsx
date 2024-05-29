import React, { useState } from 'react'
import NewWorkout from '../components/NewWorkout'

function Home() {
  const [showNewWorkout, setShowNewWorkout] = useState(false);

  const handleNewWorkoutClick = () => {
    setShowNewWorkout(!showNewWorkout)
  };
  
    return (
    <div>
        <div className='flex justify-center items-center h-48 overflow-hidden'>
            <img className='max-w-full h-full object-cover' src="/src/assets/logo-color.png" alt="ascend logo" />
        </div>
      <button onClick={handleNewWorkoutClick}>NEW WORKOUT</button>
      {showNewWorkout && <NewWorkout />}
    </div>
  )
}

export default Home
