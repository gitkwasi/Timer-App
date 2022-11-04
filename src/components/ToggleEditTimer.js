import React, { useState } from 'react'
import Timers from './Timers'

import EditTimer from './EditTimer'




function ToggleEditTimer({id,title, category, description, elapsed, runningsince, deleteTimer, editTimer, handleTimerUpdate}){

  const [showform, setShowForm]= useState(true)

  function handleToggle(state){
    setShowForm(state)
  }

  if (showform){
  return (
      <>
         
            
        <Timers 
          id={id}
          title={title} 
          category={category} 
          description={description} 
          elapsed={elapsed}
          runningsince={runningsince}
          handleToggle={handleToggle}
          deleteTimer={deleteTimer}
          handleTimerUpdate={handleTimerUpdate}
        >

        </Timers>
     
      </>
    )
  }else {
    return(
        <EditTimer
        id={id}
        title={title} 
        category={category} 
        description={description}
        elapsed={elapsed}
        runningsince={runningsince}
        handleToggle={handleToggle}
        editTimer={editTimer}
        ></EditTimer>
    )
  }
}

export default ToggleEditTimer