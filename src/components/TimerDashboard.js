import React, { useState } from 'react'
import TimerList from './TimerList'
import AddTimer from './AddTimer'




function TimerDashboard(){
  const [data, setData] = useState([])
  
  // This Function creates a new timer
  function handleNewTimer(newObj){
    const newData = [...data, newObj]
    setData(newData)
  }

  // This function updates an existing timer with new values
  function editTimer(newObj){
   const updatedData = data.map((obj)=>{
    if(obj.id === newObj.id){
      return Object.assign({}, obj, newObj)
    }else{
      return obj
    }
   })

   setData(updatedData)
  }


  
  // This function updates the state of runningsince

  function handleTimerUpdate(id, runningsince){
      const updatedObj = data.map((obj)=>{
        if(obj.id === id){
          return {...obj,  runningsince: runningsince}
        }
        return obj
      })

      setData(updatedObj)
  }


  // This function deletes an existing timer
  function deleteTimer(id){ 
    const purgedData = data.filter((items)=>{
      return(items.id !== id)
    })
   
    setData(purgedData)
    
  }

  return (
    <div>
        <TimerList data={data} 
          deleteTimer={deleteTimer} 
          editTimer={editTimer} 
          handleTimerUpdate={handleTimerUpdate} 
        ></TimerList>
        <AddTimer handleNewTimer= {handleNewTimer} ></AddTimer>
    </div>
  )
}

export default TimerDashboard   