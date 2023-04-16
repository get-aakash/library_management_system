import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { CustomCard } from '../../components/custom-card/CustomCard'
import { Hero } from '../../components/home/Hero'
import DefaultLayout from '../../components/layout/DefaultLayout'
import HomeList from '../../components/home-list/HomeList'
import { useDispatch, useSelector } from 'react-redux'
import { getBookAction } from "../books/bookAction";

export default function Home() {
  const dispatch = useDispatch()
  const [display, setDisplay] = useState([])
  const {books} = useSelector((state)=>state.books)

  useEffect(() => {
    setDisplay(books);
    !books.length && dispatch(getBookAction());
  }, [books]);

  const handleOnChange = (e)=>{
    const {value} = e.target
    const matchingBooks = books.filter(({title})=>title.toLowerCase().includes(value.toLowerCase()))
    setDisplay(matchingBooks)
  }

  return (
    <DefaultLayout>
      <Hero/>
      <Container>

      <div className="card-section mt-5">
        
        <div className='py-4 d-flex justify-content-between'>
          <h3>Browse Library</h3>
          <div className="w-10">
          <Form.Control type="text" placeholder='search' onChange={handleOnChange}/>
        </div>
        </div>
       <div className="mt-1">{display.length} books found</div>
        <HomeList display={display} />
      </div>
      </Container>
    </DefaultLayout>
  )
}
