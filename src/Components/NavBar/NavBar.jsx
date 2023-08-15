import logo from "../assets/logo.png";

import { useState } from "react";
import NavLink from "./Navlink";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const NavBar = (props) => {
  const [data, setData] = useState("");
  const getFooter = async () => {
    const dbCollection = await getDocs(collection(db, "books"));
    try {
      const booksOnFirebase = [];
      dbCollection.forEach((doc) => {
        const book = { imgs: doc.data() };
        if (doc.id === "Menu") booksOnFirebase.push(book);
      });
      booksOnFirebase.forEach((doc) => {
        setData(doc.imgs.book[0].img.result);
      });
    } catch (error) {
      console.error(error);
    }
  };
  getFooter();
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
       
      <div className="flex fixed justify-between px-4 z-50 w-full">
        <>
          <img
            src={logo}
            className="md:w-20 w-20 md:h-18 h-16 md:left-6 left-2   z-50 mt-2"
            alt=""
          />
        </>
        {!isOpenModal &&
          (isOpen ? (
            <button className="w-8" onClick={closeMenu}>
              <p className="text-2xl">X</p>
            </button>
          ) : (
            <button className="w-8" onClick={openMenu}>
              <ion-icon size="large" name="menu-outline"></ion-icon>
            </button>
          ))}
      </div>
      <header
        className={`fixed bg-white  top-0 left-0 animation-all duration-700 md:flex gap-4 z-40 w-full overflow-hidden ${
          isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="w-2/6">
          <img
            loading="lazy"
            src={data}
            alt="logo sneakers"
            className=" h-full w-full  md:block hidden"
          />
        </div>
        <div className=" md:flex block w-4/6">
          <nav className="flex flex-col w-full md:pt-2 mb-36 mt-24">
            <NavLink closeMenu={closeMenu} text={"INICIO"} />
            <NavLink closeMenu={closeMenu} text={"¿QUIEN SOY?"} />
            <NavLink closeMenu={closeMenu} text={"PROYECTOS"} />
            <NavLink closeMenu={closeMenu} text={"CONTACTO"} />
          </nav>
          <div className="flex text-xl w-full justify-items-end place-items-end p-4 md:p-0 ">
            <div className="block ">
              <a className="flex items-right mb-10 gap-4" href="#">
                <ion-icon size="large" name="logo-instagram"></ion-icon>
                <p>/milagrosgriguol.ph</p>
              </a>
              <a className="flex items-right mb-10 gap-4" href="">
                <ion-icon size="large" name="mail-outline"></ion-icon>
                <p className="">milagrosgriguol.ph@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
