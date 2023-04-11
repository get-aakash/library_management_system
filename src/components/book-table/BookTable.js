import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CustomRow from './CustomRow'
import { useSelector } from 'react-redux'

const BookTable = ({books}) => {
    
  return (
    <>
    <Row className="fw-bolder">
        <Col>Thumbnail</Col>
        <Col>Details</Col>
    </Row>
    <hr />
    {
        books?.map((book)=>(
            <CustomRow key={book.id} book={book} />
        ))
    }
    
    
    </>
  )
}

export default BookTable
