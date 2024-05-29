import React from "react";
import Banner from "./banner/Banner";
import Category from "./Category";
import Feature from "../Feature";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonials from "../testimonial/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category />
      <PopularMenu></PopularMenu>
      <Testimonials></Testimonials>
      <Feature/>
    
    </div>
  );
};

export default Home;
