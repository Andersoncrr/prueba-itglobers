import React from "react";
import "./Navbar.css";
import { FaAlignCenter } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Form } from "../Form/Form";
import { menuList } from "./const";
import { menuValue } from "./definitions";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [nameBusiness, setNameBusiness] = useState<string>("Viva Air");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const nameTitle = (item: menuValue) => {
    setNameBusiness(item.name);
    setToggleMenu(false);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <nav>
        {(toggleMenu || screenWidth > 920) && (
          <ul className="list">
            {menuList.map((item) => (
              <li
                onClick={() => nameTitle(item)}
                key={item.id}
                className="items"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}

        <button onClick={toggleNav} className="btn">
          <FaAlignCenter />
        </button>
      </nav>
      <Form nameBusiness={nameBusiness} />
    </>
  );
};
