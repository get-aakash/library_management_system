import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CustomRow from './CustomRow'

const BookTable = () => {
  return (
    <>
    <Row className="fw-bolder">
        <Col>Thumbnail</Col>
        <Col>Details</Col>
    </Row>
    <hr />
    <CustomRow />
    <CustomRow />
    <CustomRow />
    <CustomRow />
    </>
  )
}

export default BookTable
