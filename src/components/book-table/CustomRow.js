import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Ratings } from '../ratings/Ratings'


const CustomRow = ({ thumbnail, title, summary, ratings, id }) => {
    
  return (
    <Row className='border p-1 py-3 rounded shadow-lg mb-3'>
    <Col sm={2}><img src={thumbnail} alt='' width={"100%"}/></Col>
    <Col><h4>{title}</h4>
    <p>{summary}</p>
    <div className='d-flex justify-content-between'>
        <Ratings ratings={ratings} />
    <Button variant="warning">Edit</Button>
    </div>
    </Col>
  </Row>
  )
}

export default CustomRow
