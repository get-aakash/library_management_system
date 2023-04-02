import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CustomInput } from '../../components/custom-input/CustomInput'
import DefaultLayout from '../../components/layout/DefaultLayout'
import {auth, db} from "../../firebase-config/firebase-config"
export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  const handleOnChange = (e)=>{
    const{name, value} = e.target
    setForm({...form,[name]:value})
}
const handleOnSubmit = async(e)=>{
  e.preventDefault()
  try {
    
 
  const {confirmPassword, password , email,name} = form
  if(confirmPassword !== password){
    toast.error("Password doesnot match")
  }
  
  // create user in firebase 
  const {user} = await createUserWithEmailAndPassword(auth, email, password)
  console.log(user)
  if(user?.uid){
    updateProfile(user,{
      displayName: name
    })
  }

  // store in firestore as well 
  const obj = {
    email,name

  }
  await setDoc(doc(db,"users",user.uid), obj)
  toast.success("account has been created redirecting to dashboard")
} catch (error) {
  toast.error(error.message)
  
}
navigate("/dashboard")

}
  const inputs = [
    {
      label: "Name",
      name:"name",
      placeholder: "sam",
      required: true,
    },
    {
      label: "Email" ,
      name:"email",
      placeholder: "sam@sam.com",
      type: "email",
      required: true,
    },
    {
      label: "Password",
      name:"password",
      placeholder: "*****",
      type:"password",
      required: true,
    },
    {
      label: "Confirm Password" ,
      name:"confirmPassword",
      type:"password",
      placeholder: "*****",
      required: true,
    },
  ]
  return (
    <DefaultLayout>
      <Container className='mt-5'>
        <Form onSubmit={handleOnSubmit} className='border rounded shadow-lg p-5 m-auto py-5' style={{width:"450px"}}>
          <h3 className='text-primary fw-bolder'>Join Our Library</h3>

          <Form.Text className='mt-5 py-2'>
            Anyone can create the admin and user account
          </Form.Text>
          <div className="mt-5">
            {inputs.map((item,i)=><CustomInput key={i} {...item} onChange={handleOnChange}/>)}
          </div>
          <div className='mt-3 d-grid'>
          <Button type='submit' >Join Library</Button>
          </div>
          
        </Form>

      </Container>
    </DefaultLayout>
  )
}
