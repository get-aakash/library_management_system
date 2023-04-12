import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../components/layout/AdminLayout'
import { Form,Button, Container } from 'react-bootstrap'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { addBookAction } from './bookAction'
import { Link, useNavigate } from 'react-router-dom'


const initialState = {thumbnail:"", title:"", summary:"", ratings:""}
export default function NewBooks() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialState)
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.user)
  if(user?.role !== "admin"){
    return <h1>Unauthorised</h1>
  }

  const input = [{
    name: "title",
    type: "text",
    placeholder:"Book Title",
    label: "Book Name",
    required: true
  },
  {
    name: "ratings",
    type: "number",
    label: "Ratings",
    min:"1",
    max:"5",
    required: true
  },
  {
    name: "thumbnail",
    type: "url",
    placeholder:"http://...",
    label: "Image",
    required: true
  },
  {
    name: "summary",
    type: "text",
    as:"textarea",
    placeholder:"Book Summary",
    label: "Book Summary",
    rows: "5",
    required: true
  }
 ]

 const handleOnChange = (e)=>{
  const {name, value} = e.target
  setForm({...form, [name]:value,})
 }

 const handleOnSubmit = (e)=>{
  e.preventDefault()
  dispatch(addBookAction(form))
  navigate('/admin/books')
  console.log(form)
 }
  return (
    <AdminLayout>
      <Container>
        
        <Form onSubmit={handleOnSubmit} className='w-75 m-auto border rounded p-2 mt-5'>
          <Link to="/admin/books">
        <Button variant='secondary'>&lt; Back</Button>
        </Link>
        <h4 className='mt-4'>Add New Book</h4>
        <hr />
        {
          input.map((item,i)=>(<CustomInput {...item} key={i} onChange={handleOnChange}/>))
        }
        <div className='py-3 d-grid'>
          <Button type='submit' variant="primary">Submit New Book</Button>
        </div>
        </Form>
      </Container>
    </AdminLayout>
  )
}
