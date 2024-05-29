import SectionTitle from "./../SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <div className="text-center mt-8">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"---Check it out---"}
        ></SectionTitle>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button className="border-b hover:border-none duration-150 delay-100 border-gray-500 rounded-lg h-12 w-36
         hover:bg-orange-500 hover:text-white font-medium ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
