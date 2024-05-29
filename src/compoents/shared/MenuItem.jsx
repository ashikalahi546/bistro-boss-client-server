import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-3">
        <img
          style={{ borderRadius: "0px 200px 200px " }}
          className="w-[118px] h-[104px]"
          src={image}
          alt=""
        />
        <div>
          <h3>{name}</h3>
          <p>{recipe}</p>
        </div>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;
