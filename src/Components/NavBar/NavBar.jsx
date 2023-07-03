import nav from "../assets/nav.jpg";
import logo from "../assets/logo.png";

import Close from "../Icons/CloseX";
import { useState } from "react";
import NavLink from "./Navlink";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpenModal } = { ...props };
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpenModal &&
        (isOpen ? (
          <button className=" fixed top-4 right-6 z-50   " onClick={closeMenu}>
            <p className="text-2xl">X</p>
          </button>
        ) : (
          <button className=" fixed top-4 right-6 z-50   " onClick={openMenu}>
            <ion-icon size="large" name="grid-outline"></ion-icon>{" "}
          </button>
        ))}
      {!isOpenModal && (
        <img src={logo} className="w-24 h-20 left-6 fixed  z-50 mt-2" alt="" />
      )}
      <header
        className={`fixed bg-white  top-0 left-0 animation-all duration-700 md:flex gap-4 z-40 w-full overflow-hidden ${
          isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
        }`}
      >
        <img
          loading="lazy"
          src={nav}
          alt="logo sneakers"
          className=" h-full w-2/6 "
        />
        <div className="">
          <nav className="flex flex-col pt-2 mb-48">
            <button onClick={closeMenu} className="mb-10 md:mb-0 md:hidden">
              <Close />
            </button>
            <NavLink closeMenu={closeMenu} text={"INICIO"} />
            <NavLink closeMenu={closeMenu} text={"¿QUIEN SOY?"} />
            <NavLink closeMenu={closeMenu} text={"BOOKS"} />
            <NavLink closeMenu={closeMenu} text={"GALERIA"} />
            <NavLink closeMenu={closeMenu} text={"CONTACTO"} />
          </nav>
          <div className="ml-4 text-xl">
            <a className="flex items-center gap-4" href="#">
              <ion-icon size="large" name="logo-instagram"></ion-icon>
              <p>/miligriguol_ph</p>
            </a>
            <p className="mt-4">milagrosgriguol.ph@gmail.com</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
