import React, { useEffect, useState } from "react";
import SectionTitle from "./../SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Testimonials = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("/Reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="mt-20">
      <div className="text-center my-10">
        <SectionTitle
          heading={"---What Our Clients Say---"}
          subHeading={"TESTIMONIALS"}
        ></SectionTitle>
      </div>

      <div className="w-10/12 mx-auto ">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={review.rating}
                    // onChange={setRating}
                    readOnly
                  />
                </div>
                <h2>{review.details.slice(0, 180)}</h2>
                <h1 className="text-yellow-600 text-xl">{review.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
