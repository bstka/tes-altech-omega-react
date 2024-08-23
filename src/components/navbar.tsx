import React, { useContext, useMemo } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/list.svg";
import { NavigationStore } from "./context/navigation";
import { Link } from "react-router-dom";

function Navbar() {
  const menus = useMemo(
    () => [
      {
        path: "#about",
        displayText: "About",
        key: "about",
      },
      {
        path: "#pricing",
        displayText: "Pricing",
        key: "pricing",
      },
      {
        path: "#contact",
        displayText: "Contact",
        key: "contact",
      },
    ],
    []
  );

  const { isOpen, setOpen } = useContext(NavigationStore);

  return (
    <>
      <div
        className={
          "h-screen w-screen bg-white " + (isOpen ? "absolute" : "hidden")
        }
      >
        <div className='relative w-full h-full'>
          <div className='w-full h-full flex flex-col gap-16 p-8'>
            <div className='w-full flex flex-row'>
              <button
                className='ml-auto text-2xl font-medium'
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>
            {menus.map((menu) => (
              <a
                key={menu.key}
                href={menu.path}
                onClick={() => setOpen(false)}
                className='text-xl font-medium'
              >
                {menu.displayText}
              </a>
            ))}
            <Link to={"/login"}>
              <button className='py-2 px-8 border-2 font-medium bg-[#5fcde6] text-white xl:bg-white xl:border-[#5fcde6] rounded xl:text-[#5fcde6] transition-all hover:bg-[#5fcde6] hover:text-white'>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full h-20 bg-transparent'>
        <div className='w-full h-full flex flex-row justify-between items-center px-8 py-2'>
          <div className='w-fit flex flex-row gap-8 items-center'>
            <a href='#'>
              <img src={logo} width={"50px"} />
            </a>

            <a
              href='#'
              className='hidden xl:block text-xl font-medium text-white'
            >
              Home
            </a>
          </div>
          <button
            className='xl:hidden '
            onClick={() => setOpen((prev) => !prev)}
          >
            <img src={menuIcon} alt='Menu Button' className='w-6' />
          </button>
          <div className='hidden w-full h-full xl:flex flex-row items-center justify-end gap-4'>
            {menus.map((menu) => (
              <a
                key={menu.key}
                href={menu.path}
                className='text-xl font-medium'
              >
                {menu.displayText}
              </a>
            ))}
            <Link to={"/login"}>
              <button className='py-2 px-8 border-2 font-medium bg-[#5fcde6] text-white xl:bg-white xl:border-[#5fcde6] rounded xl:text-[#5fcde6] transition-all hover:bg-[#5fcde6] hover:text-white'>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
