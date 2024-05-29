import Cover from "../../compoents/shared/Cover";
import img from "/image/Rectangle12.png";
// import PopularMenu from "../../compoents/popularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../../compoents/MenuCategory";
import SectionTitle from "./../../compoents/SectionTitle";

import dessertImg from "/image/dessertbg.jpeg";
import saladImg from "/image/saladbg.jpg";
import soupImg from "/image/soupbg.jpg";
import pizzaImg from "/image/pizzabg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover img={img} title={"Our Menu"}></Cover>
      <div className="text-center py-5">
        <SectionTitle
          heading={"---Don't miss---"}
          subHeading={"TODAY'S OFFER"}
        ></SectionTitle>
      </div>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={desserts}title={"Dessert"} img={dessertImg}></MenuCategory>
      <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
    </div>
  );
};

export default Menu;
