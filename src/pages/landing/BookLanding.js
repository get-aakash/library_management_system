import React, { useEffect } from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBookAction } from '../books/bookAction'
import { Ratings } from '../../components/ratings/Ratings'


const defaultBorrowingDate = 14
export default function BookLanding() {
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {bookId} = useParams()
  const {selectedBook} = useSelector((state)=>state.books)
  const {title, thumbnail, summary, ratings, available,availableFrom, author, published} = selectedBook
  // useEffect(()=>{
  //   !books.length && dispatch(getBookAction())
  //   if(books.length){}
  // },[books,dispatch])
  // console.log(bookId)
  useEffect(()=>{
    !selectedBook.id && navigate("/")
  },[navigate, selectedBook])

  const handleOnClick = () =>{
    const today = new Date()
    const returnedAt = today.setDate(today.getDate()+defaultBorrowingDate)

    const obj = {
      bookId: selectedBook.id,
      bookName: selectedBook.title,
      userId: user.uid,
      userName: user.name,
      borrowedAt: new Date(),
      returnedAt
      
       
    }
    console.log(obj)
  }

  const date = new Date(availableFrom).toLocaleDateString()
  return (
    <DefaultLayout>
      <Container>
    <div className="mt-5">
      <Row>
        <Col sm="5">
        <img src={thumbnail} alt='' width="100%" className='border rounded p-1'/>
        </Col>
        <Col sm="7">
          <div className="fw-bold fs-1">{title}</div>
          <Ratings ratings={ratings} />
          <p>
            {author} - {published}
          </p>
          <p>{summary?.substr(0,200)}...</p>
          
          <p>
                {user.uid ? (
                  available ? (
                    <Button variant="primary" onClick={handleOnClick} >
                      {" "}
                      Borrow Now
                    </Button>
                  ) : (
                    <span className="bg-info p-1 rounded text-primary">
                      Available From: {date}
                    </span>
                  )
                ) : (
                  <Link to="/signin">Login to Burrow this book</Link>
                )}
              </p>

        </Col>
      </Row>
      <h3>Reviews</h3>
      <Row className='mt-3 border rounded p-3 mb-2'>
        <Col sm={3}>
        
        
            <div className='avatar  '>PA</div>
           
          
        </Col>
        <Col>
        <div className="message">
              <Ratings ratings = {5}/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vitae vero earum pariatur dolore sint quis, id dolores quos a.</p>
            </div>
        </Col>

      </Row>
      <Row className='mt-3 border rounded p-3 mb-2'>
        <Col sm={3}>
        
        
            <div className='avatar  '>PA</div>
           
          
        </Col>
        <Col>
        <div className="message">
              <Ratings ratings = {5}/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vitae vero earum pariatur dolore sint quis, id dolores quos a.</p>
            </div>
        </Col>

      </Row>
      <Row className='mt-3 border rounded p-3 mb-2'>
        <Col sm={3}>
        
        
            <div className='avatar  '>PA</div>
           
          
        </Col>
        <Col>
        <div className="message">
              <Ratings ratings = {5}/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vitae vero earum pariatur dolore sint quis, id dolores quos a.</p>
            </div>
        </Col>

      </Row>
      <Row className='mt-3 border rounded p-3 mb-2'>
        <Col sm={3}>
        
        
            <div className='avatar  '>PA</div>
           
          
        </Col>
        <Col>
        <div className="message">
              <Ratings ratings = {5}/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad vitae vero earum pariatur dolore sint quis, id dolores quos a.</p>
            </div>
        </Col>

      </Row>
    </div>
      </Container>
    </DefaultLayout>
  )
}
