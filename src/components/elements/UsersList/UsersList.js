import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { addUser, detailUser, getListUsers, deleteUser} from '@/actions/usersAction'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Modal } from 'react-bootstrap'




const UsersList = ({getListUsersResult, getListUsersLoading, getListUsersError, addUserResult}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')
    const [show, setShow] = useState(false);

    const { detailUserResult} = useSelector((state) => state.userReducer)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({name: name, email: email, gender: gender, status: status}))
}

useEffect(() => {
    if(addUserResult) {
      dispatch(getListUsers())
    }
    setName('')
    setEmail('')
    setGender('')
    setStatus('')
  
  }, [addUserResult, dispatch])

  useEffect(() => {
    if(detailUserResult) {
        setName(detailUserResult.name)
        setEmail(detailUserResult.email)
        setGender(detailUserResult.gender)
        setStatus(detailUserResult.status)
    }
  
  
  }, [detailUserResult, dispatch])


useEffect(() => {
 detailUser()
},[dispatch, detailUserResult])

  return (
    <div className={styles.wrapper}>
          <Button variant="primary" onClick={handleShow}>
                    Add user
            </Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="Gender"
                placeholder="Female or male"
                autoFocus
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Select
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                style={{ width: "300px" }}
                className="mt-1"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </Form.Select>
            </Form.Group>
           <Button type='submit' variant="primary"  onClick={handleClose}>
            Submit
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
       {getListUsersResult ? (
         getListUsersResult.map((user) => {
          return(
              <>
            
                  <div className={styles.cart} key={user.id}>
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                      <Button variant="secondary"  onClick={() => dispatch(detailUser(alert(Object.values(user))))}>detail</Button>
                      <Button variant="danger"  onClick={() => dispatch(deleteUser(user.id))}>delete</Button>
                  </div>
                  
              </>
          )
        })
      ) : getListUsersLoading ? (
        <p>Loading ....</p>
      ) : (
        <p>{getListUsersError}</p>
      )}
    </div>
  )
}

export default UsersList