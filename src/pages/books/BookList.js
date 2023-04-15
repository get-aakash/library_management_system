import React, { useEffect } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Button,Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BookTable from '../../components/book-table/BookTable'
import { getBookAction } from './bookAction'



export default function BookList() {
  const dispatch = useDispatch()
  const {books} = useSelector((state)=> state.books)
  const {user} = useSelector((state)=> state.user)

  useEffect(()=>{
    dispatch(getBookAction())

  },[dispatch])
  if(user?.role !== "admin"){
    return <h1>Unauthorised</h1>
  }
  return (
    <AdminLayout>
      <Container>
        <h3 className='mt-5'>Book Management</h3>
       
          <BookTable books={books} />
      </Container>
    </AdminLayout>
  )
}
