import Carousel from "react-bootstrap/Carousel";

const CarouselItem = () => {
  return (
    <Carousel className="text-center" data-bs-theme="dark">
      <Carousel.Item>
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4d1606268e015845.jpg?"
          height={250}
        />
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5d51dbf60f2f8d4d.jpg?"
          height={250}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/2e6d5e4191298924.jpg?"
          height={250}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselItem;
