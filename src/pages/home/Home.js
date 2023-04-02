import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { CustomCard } from '../../components/custom-card/CustomCard'
import { Hero } from '../../components/home/Hero'
import DefaultLayout from '../../components/layout/DefaultLayout'

export default function Home() {
  return (
    <DefaultLayout>
      <Hero/>
      <Container>

      <div className="card-section mt-5">
        
        <div className='py-4 d-flex justify-content-between'>
          <h3>Browse Library</h3>
          <div className="w-10">
          <Form.Control type="text" placeholder='search' />
        </div>
        </div>
       
        <div className="d-flex gap-4 flex-wrap">
        <CustomCard
        title="The Kite Runner"
        img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327976246l/12532265.jpg"
        summary="The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul."
         />
          <CustomCard
        title="The Kite Runner"
        img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327976246l/12532265.jpg"
        summary="The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul."
         />
           <CustomCard
        title="The Kite Runner"
        img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327976246l/12532265.jpg"
        summary="The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul."
         />
           <CustomCard
        title="The Kite Runner"
        img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327976246l/12532265.jpg"
        summary="The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul."
         />
         </div>
      </div>
      </Container>
    </DefaultLayout>
  )
}
