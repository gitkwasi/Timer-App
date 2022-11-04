import { Container } from 'react-bootstrap'
import ToggleEditTimer from './ToggleEditTimer'


function TimerList({data,deleteTimer, editTimer, handleTimerUpdate}) {
  
  



  return (
    <>
      <Container fluid className='text-muted'>
          <h1 className='' style={{textAlign:"center"}}>Timers</h1>
          <hr/>
          <div className='container overflow-auto' style={{width:"80%", height:"70vh", border:"1px solid #e6e6e6", borderRadius:"5px"}}>
            <div className='row'>

              {/* Map over the data to create individual timers */}
              { data.map((data)=>{ 
              
              return <div className='col-4' key={data.id}>
                        <ToggleEditTimer 
                          id = {data.id}
                          title={data.title}
                          category={data.category}
                          description={data.description}
                          elapsed={data.elapsed}
                          runningsince={data.runningsince}
                          deleteTimer={deleteTimer}
                          editTimer={editTimer}
                          handleTimerUpdate={handleTimerUpdate}
                          >

                        </ToggleEditTimer>
                    </div>
              })}
            
                  
            </div>
              
          </div>
          
      </Container>
      
    </>
    
  )
}

export default TimerList

