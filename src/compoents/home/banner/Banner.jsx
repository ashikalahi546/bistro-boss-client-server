

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "/image/Rectangle1.png";

const Banner = () => {
  return (
    <div>

 
      <Carousel className="text-center">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
