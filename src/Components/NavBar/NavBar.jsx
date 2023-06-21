import logo from "../assets/logo.png"
import Menu from "../Icons/Menu"
import Close from "../Icons/CloseX"
import { useState } from "react"
import NavLink from "./Navlink"

const NavBar =() =>{
    const [ClassOfNav, setClassOfNav] = useState("font-bold hidden w-2/5 h-full md:flex gap-4 md:ml-auto md:flex-row md:static md:gap-4 md:h-auto md:bg-transparent justify-center items-center pt-2 ")


    const openMenu = ()=>{
        setClassOfNav(" w-4/5 absolute bg-white top-0 left-0 h-full p-8 gap-y-5 flex flex-col md:flex gap-4 md:mr-auto md:flex-row md:static md:gap-4 md:p-0 md:h-auto z-10 ")
    }
    const closeMenu = ()=>{
        setClassOfNav("hidden w-2/5 h-full md:flex gap-4 md:mr-auto md:flex-row md:static md:gap-4 md:p-0 md:h-auto")
    }

    
    return(
        <>
           <header className="absolute items-center flex container mx-auto gap-8 py-2 px-4 content-center z-10 bg-transparent">

                <button className="md:hidden " onClick={openMenu}>   
                    <Menu/>
                </button>

                <img loading="lazy" src={logo} alt="logo sneakers" className=" pb-0 mr-auto md:mr-0 w-24 ml-0 md:ml-24 " />
                <nav className={ClassOfNav}>
                    <button onClick={closeMenu} className="mb-10 md:mb-0 md:hidden">
                        <Close/>
                    </button>
                    <NavLink text={"INICIO"}/>
                    <NavLink text={"¿QUIEN SOY?"}/>
                    <NavLink text={"BOOKS"}/>
                    <NavLink text={"GALERIA"}/>
                    <NavLink text={"CONTACTO"}/>
                    
                </nav>

            </header>
        </>
    )
}

export default NavBar