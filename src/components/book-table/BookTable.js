import React, { useEffect, useState } from 'react'
import { Row, Col, Button,Form, Pagination } from 'react-bootstrap'
import CustomRow from './CustomRow'
import { useDispatch, useSelector } from 'react-redux'
import {  Link } from 'react-router-dom'
import { getBookAction } from '../../pages/books/bookAction'


const booksPerPage = 5
const BookTable = () => {
  const [active, setActive] = useState(1)
  const {books} = useSelector((state)=> state.books)
  const [display, setDisplay] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    !display.length &&
    dispatch(getBookAction())
    setDisplay(books)
  },[dispatch])
  const handleOnChange = (e)=>{
    const {value} = e.target
    const matchingBooks = books.filter(({title})=>title.toLowerCase().includes(value.toLowerCase()))
    setDisplay(matchingBooks)
  }

  const handleOnPaginationClick = (page) =>{
    setActive(page)

  }
  const pages = Math.ceil(display.length/ booksPerPage)
   
let items = [];
for (let number = 1; number <= pages; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}
    onClick={() => handleOnPaginationClick(number)}>
      {number}
    </Pagination.Item>,
  );
}

const start = (active-1) * booksPerPage

const end = start + booksPerPage
    
  return (
    <>
     <div className="d-flex justify-content-between mt-5">
        <Form.Group>
            <input
              type="text"
              placeholder="search book title"
              className="form-control"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Link to="/admin/new">
            <Button variant="primary"> + Add New Book</Button>
          </Link>
          </div>
          <hr />
          <div className="mb-1">{display.length} books found!</div>
          
    <Row className="fw-bolder">
        <Col>Thumbnail</Col>
        <Col>Details</Col>
    </Row>
    <hr />
    {display.slice(start, end)?.map((item, i) => (
        <CustomRow key={item.id} {...item} />
      ))}
    
    <Pagination>{items}</Pagination>
    </>
  )
}

export default BookTable
