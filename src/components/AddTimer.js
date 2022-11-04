import React, { useState, useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {nanoid} from 'nanoid'


function AddTimer({handleNewTimer}) {
  const [modalShow, setModalShow] =useState(false)
  
  const titleRef= useRef()  
  const categoryRef= useRef()  
  const descriptionRef= useRef()  

  
  function handleFormAdd(e){
    e.preventDefault()
    const newobj = {
      id: nanoid(),
      title: titleRef.current.value,
      category:categoryRef.current.value,
      description: descriptionRef.current.value,
      runningsince:'',
      elapsed:''
    }

    handleNewTimer(newobj)

    closeModal()
  }
  
 
  
  function handleModal(){
    setModalShow(true)
  }

  function closeModal(){
    setModalShow(false)
  }
  return (
    <>
      <div className='mt-3 p-4 d-flex justify-content-center'>
              <Button variant='success ' onClick={handleModal}> Add Timer</Button>
      </div>


      <Modal show={modalShow} onHide={closeModal} backdrop='static'  centered  >
        <Modal.Dialog >
            <Modal.Header closeButton>
                <Modal.Title >Add New Timer Event</Modal.Title>
            </Modal.Header>
            <Modal.Body  style={{width:"100%"}}>
                <Form className='modal-sm' >

                  <Form.Group>
                      <Form.Label>Title</Form.Label>
                      <Form.Control type='text' className='' required ref={titleRef}></Form.Control>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Category</Form.Label>
                      <Form.Control type='text' className='' required ref={categoryRef}></Form.Control>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <Form.Control as='textarea' rows={2} className='' required ref={descriptionRef}></Form.Control>
                  </Form.Group>
                  
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={handleFormAdd}> Add</Button>
                <Button variant='danger' className='ms-2' onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  )
}

export default AddTimer


