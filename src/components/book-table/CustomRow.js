import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const CustomRow = ({thumbnail, title, summary, ratings, id}) => {
    
  return (
    <Row className='border p-1 py-3 rounded shadow-lg mb-3'>
    <Col sm={2}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9N_sRykoNhh7SAwY8hW-HhEnvjrot2X6vZn4EBheM1OohOUBs5NXiNqgRrkeWexkwTc&usqp=CAU' alt='' width={"100%"}/></Col>
    <Col><h4>Lorem ipsum dolor sit amet consectetur.</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ullam quisquam minima corrupti aliquid. Error!</p>
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
