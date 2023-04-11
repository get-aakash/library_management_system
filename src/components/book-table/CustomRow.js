import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const CustomRow = ({book}) => {
    
  return (
    <Row className='border p-1 py-3 rounded shadow-lg mb-3'>
    <Col sm={2}><img src={book?.thumbnail} alt='' width={"100%"}/></Col>
    <Col><h4>{book?.title}</h4>
    <p>{book?.summary}</p>
    <div className='d-flex justify-content-between'>
        <div className='ratings text-warning'>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>
            <i className='fa-solid fa-star'></i>

        </div>
    <Button variant="warning">Edit</Button>
    </div>
    </Col>
  </Row>
  )
}

export default CustomRow
