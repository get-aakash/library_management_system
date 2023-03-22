import Carousel from 'react-bootstrap/Carousel';
import l1 from '../../assets/image1.jpg'
import l2 from '../../assets/image2.jpg'
import l3 from '../../assets/image3.jpg'

export const Hero = ()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={l1}
          alt="First slide"
        />
        <Carousel.Caption >
            <div className='hero-main-img'><h3>Welcome to Library Management System</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={l2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={l3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

