import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CustomInput } from '../../components/custom-input/CustomInput'
import DefaultLayout from '../../components/layout/DefaultLayout'
import {auth, db} from "../../firebase-config/firebase-config"
import { setUser } from './userSlice'


export default function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
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
  const userPending = createUserWithEmailAndPassword(auth, email, password)
  toast.promise(userPending,{pending:"please wait"})

  const {user} = await userPending
  
  console.log(user)
  if(user?.uid){
    updateProfile(user,{
      displayName: name,
      role:form.role
    })
  }

  // store in firestore as well 
  const obj = {
    email,
    name,
    role:form.role

  }
  await setDoc(doc(db,"users",user.uid), obj)
  dispatch(setUser({ ...obj, uid: user.uid, role: form.role }))
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
          <Form.Group className="mb-3" >
            <label htmlFor="">Account Type:</label>
            <Form.Select name='role'onChange={handleOnChange}>
              <option value="">--Select Value--</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Form.Select>
          </Form.Group>
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
