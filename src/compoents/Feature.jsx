import React from "react";
import SectionTitle from "./SectionTitle";

const Feature = () => {
  return (
    <div className="my-10">
      <div className='bg-[url("/image/Rectangle13.png")] h-[700px] bg-fixed bg-cover'>
        <div className="text-center py-8">
          <SectionTitle
            heading={"---Check it out---"}
            subHeading={"FROM OUR MENU"}
          ></SectionTitle>

          <div className="flex gap-5 w-8/12 mx-auto pt-10">
            <img src="/image/Rectangle 14.png" alt="" />
            <div className="w-6/12">
              <p className="text-white">
                March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error voluptate facere, deserunt
                dolores maiores quod nobis quas quasi. Eaque repellat recusandae
                ad laudantium tempore consequatur consequuntur omnis ullam
                maxime tenetur.
              </p>
              <button className="mt-6 text-white font-medium border-b rounded-lg px-5 py-2.5 hover:bg-orange-500 duration-100 delay-100 hover:border-none">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
