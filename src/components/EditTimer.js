import React, {useRef} from 'react'
import { Button, Card, Form } from 'react-bootstrap'



function EditTimer({id,title, category, description, handleToggle,elapsed, runningsince, editTimer,}){

  const titleRef= useRef()  
  const categoryRef= useRef()  
  const descriptionRef= useRef()  

  const buttontext = id? 'Update': 'Create';

  function handleUpdate(){
    const newObj={
        id: id,
        title: titleRef.current.value,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
        elapsed:elapsed,
        runningsince:runningsince
    }
    editTimer(newObj)
    handleToggle(true)
  }


    
  
  return (
    <>
      <Card className='mt-3 p-3'>
        <Card.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' className='' defaultValue={title} ref={titleRef}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type='text' className='' defaultValue={category} ref={categoryRef}></Form.Control>
                </Form.Group> 
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} className='' defaultValue={description} ref={descriptionRef}></Form.Control>
                </Form.Group> 
                

                <div className='d-flex justify-content-around mt-4'>
                    <Button variant='success' onClick={handleUpdate}>{buttontext}</Button>
                    <Button variant='outline-danger' onClick={()=>handleToggle(true)}>Cancel</Button>
                </div>
                
            </Form>
        </Card.Body>
    </Card>
    </>
  )
}

export default EditTimer