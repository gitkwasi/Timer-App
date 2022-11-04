import React, { useState }        from 'react'
import { Button, Card } from 'react-bootstrap'
import trashcan from '../trashcan.svg'
import edit from '../edit.svg'

function Timers({id,title, category, description,  handleToggle, deleteTimer,runningsince ,handleTimerUpdate}) {
    
    const [elapsedTime, setElapsesTime] = useState(0)

    function startTimer(){
        const timeStarted = Date.now()
        handleTimerUpdate(id, timeStarted)
        
    }

    function getElapsedTime(){
        const elapsed = Date.now() - runningsince
        setElapsesTime(elapsed/1000)
        
    }
    
    function convertedTime(seconds){

        const result = new Date(seconds * 1000).toISOString().slice(11,19)
        return result
    }

    
  return (
    <Card className='mt-3'>
        <Card.Header><h4>{title}</h4></Card.Header>
        
        <Card.Body>
            <Card.Subtitle>{category}</Card.Subtitle>
            
            <Card.Text>{description}</Card.Text>
            
            <div className='p-2 d-flex justify-content-around'>
                <h2>{convertedTime(elapsedTime)}</h2>
            </div>
            
            <div className='d-flex justify-content-end'>
                <img  alt='trashcan' src={trashcan} style={{cursor:"pointer"}} onClick={()=>{deleteTimer(id);}}></img>
                <img alt='edit button' src={edit} style={{cursor:"pointer"}} className='ms-1' onClick={()=>handleToggle(false)}></img>
            </div>
        </Card.Body>
        
        <Card.Footer className='d-flex justify-content-evenly' >
            <Button variant='primary' className='btn-sm' onClick={startTimer}>Start</Button>
            <Button variant='warning' className='btn-sm' onClick={getElapsedTime}>Stop</Button>
        </Card.Footer>
    
    </Card>
  )
}

export default Timers 