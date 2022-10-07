import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-responsive-carousel/lib/styles/carousel.css";

export function Valuestreams() {
  return (
    <div className='container-fliud'>

    <Carousel variant="dark" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/GIPP.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Global Integrated Pricing Programme (GIPP)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/PSO.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Product Supply Optimisation(PSO)</h3>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Bioverse.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Bioverse</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="/B2B.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>B2B Sales</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}
