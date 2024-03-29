import { useState } from "react";
import SliderModule from "./SliderModule";

const ModuleMain = (props) => {
  const { imgs, imgsSmall } = { ...props };


  const openModal = () => {
    /* Funcion para que el modal no se abra en dispositivos moviles */
    window.innerWidth > 767 && setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="mb-40">
      <SliderModule
        books={imgs}
        imgsSmall={imgsSmall}
        className="grid md:grid-cols-4 md:gap-4 md:cursor-pointer xl:px-20"
        openModal={openModal}
      />
      {isOpenModal && (
        <>
          <span
            className="top-0 left-0  fixed w-full h-full bg-[#1f1f1f4b]"
            onClick={closeModal}
          ></span>
          <SliderModule
            imgs={imgs}
            imgsSmall={imgsSmall}
            isOpenModal={isOpenModal}
            closeModal={closeModal}
            /* El md:-translate-y-1/2 y el md:-translate-x-1/2 sirve para mover el modal medio de la pagina*/
            className="hidden md:grid md:absolute md:top-1/2 md:letf-1/2 top-1/2 letf-1/2 md:-translate-y-1/2 md:translate-x-1/2 md:grid-cols-4 md:gap-4  md:max-w-md md:px-10 "
          />
        </>
      )}
    </div>
  );
};

export default ModuleMain;
