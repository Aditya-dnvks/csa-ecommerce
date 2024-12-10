import Carousel from 'react-bootstrap/Carousel';

const CarouselItem=()=>{
    return(
        <div>
           <Carousel  data-bs-theme="white">
      <Carousel.Item>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg?" height={250}/>
  

      </Carousel.Item>
      <Carousel.Item>
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8074e7b2f6d2bfea.jpg?" height={250}/>
      
       
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/d471047a7c1104e7.jpg?" height={250}/>
     
       
      </Carousel.Item>
    </Carousel>
        </div>
    )
      
    
}
 export default CarouselItem;