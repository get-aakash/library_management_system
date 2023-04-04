import React, { useEffect } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Button,Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function BookList() {

  return (
    <AdminLayout>
      <Container>
        <h3 className='mt-5'>Book Management</h3>
        <div className="d-flex justify-content-between mt-5">
        <Form.Group>
            <input
              type="text"
              placeholder="search book title"
              className="form-control"
            />
          </Form.Group>
          <Link to="/admin/new">
            <Button variant="primary"> + Add New Book</Button>
          </Link>
          </div>
          <hr />
          
      </Container>
    </AdminLayout>
  )
}
