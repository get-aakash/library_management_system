import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { CustomCard } from '../../components/customcard/CustomCard'
import { Hero } from '../../components/home/Hero'
import DefaultLayout from '../../components/layout/DefaultLayout'

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Container>
      <div className="card-section mt-5">
        <div className="py-4 d-flex justify-content-between">
          <h3>Browse Library</h3>
          <div className="w-10"><Form.Control type="text" placeholder='search' /></div>
          
        </div>
        <div className='d-flex gap-4 flex-wrap'>
        <CustomCard img= "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781526604743&w=&h=570"
         title="Kite Runner"
         summary="The Kite Runner is the first novel by Afghan-American author Khaled Hosseini."/>
         <CustomCard img= "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781526604743&w=&h=570"
         title="Kite Runner"
         summary="The Kite Runner is the first novel by Afghan-American author Khaled Hosseini."/>
         <CustomCard img= "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781526604743&w=&h=570"
         title="Kite Runner"
         summary="The Kite Runner is the first novel by Afghan-American author Khaled Hosseini."/>
        <CustomCard img= "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781526604743&w=&h=570" title="Kite Runner"
         summary="The Kite Runner is the first novel by Afghan-American author Khaled Hosseini."/>
        </div>
        
        
        
      </div>
      </Container>
      
    </DefaultLayout>
  )
}

export default Home
