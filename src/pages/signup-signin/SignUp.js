import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import CustomInput from '../../components/custom-input/CustomInput'
import DefaultLAyout from '../../components/layout/DefaultLayout'
const SignUp = () => {
  const [form, setForm] = useState({})
  const handleOnChange = e =>{
    const{name, value} = e.target
    setForm({...form, [name]:value})
  }
  const handleOnSubmit = e =>{
    e.preventDefault()
    console.log(form)
  }
  const inputs = [{
    label: "Name",
    name: "name",
    placeholder: "sam",
    required: true
  }, {
    label: "Email",
    name: "email",
    placeholder: "sam@sam.com",
    type:"email",
    required: true
  }, {
    label: "Password",
    name: "password",
    placeholder: "******",
    type:"password",
    required: true
  }, {
    label: "Confirm Password",
    name: "confirmPassword",
    placeholder: "******",
    type:"password",
    required: true
  },]
  return (
    <DefaultLAyout>
      <Container className='mt-5'>
        <Form onSubmit={handleOnSubmit} className='border rounded shadow-lg p-3 m-auto py-5' style={{ width: "450px" }}>
          <h3 className='text-primary fw-bolder'>Get onboard with Library management system</h3>
          <Form.Text className='mt-5 py-2'>Anyone can create user and admin</Form.Text>
          <div className='mt-5'>
            {inputs.map((item,i)=>(
              <CustomInput onChange={handleOnChange} key={i} {...item}/>
            ))}
            <Button className='d-grid' type='submit'>Join Library</Button>
          </div>
        </Form>
      </Container>
    </DefaultLAyout>
  )
}

export default SignUp
