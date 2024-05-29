import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLodding] = useState(true);
  useEffect(() => {
    fetch("Menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLodding(false);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
