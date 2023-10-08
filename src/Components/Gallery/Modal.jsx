import { useEffect, useRef, useState } from "react";
import ModalGallery from "./ModalGallery";
import PhotoShow from "./PhotoShow";

export default function Modal(props) {
  const { bookOfModal, nameOfBook, setIsOpenModal, ImgOfModal, parraf } = {
    ...props,
  };
  const [mapBook, setmapBook] = useState([]);
  useEffect(() => {
    setmapBook(bookOfModal);
  }, [bookOfModal]);
  const bodyChange = document.querySelector("#body");

  const closeModal = () => {
    /* Funcion para que el modal no se abra en dispositivos moviles */
    setIsOpenModal(false);
    bodyChange.classList.remove("overflow-hidden");
  };

  const [image, setImage] = useState("");
  const [indexImage, setindexImage] = useState(0);

  const [gallery, setGallery] = useState(false);
  const btnSlider = useRef(null);
  const backToGallery = () => {
    setGallery(false);
  };
  const next = (bookOfGallery, length) => {
    if (indexImage <= length - 2) {
      setindexImage(indexImage + 1);
      setImage(bookOfGallery[indexImage + 1].img.result);
    }
  };
  const prev = (bookOfGallery) => {
    if (indexImage >= 1) {
      setindexImage(indexImage - 1);
      setImage(bookOfGallery[indexImage - 1].img.result);
    }
  };

  const openGallery = (image, index) => {
    setImage(image);
    setindexImage(index);
    setGallery(true);
  };
  return (
    <div
      className={`absolute md:w-full flex h-screen p-0  top-0 z-40 ${
        !gallery ? "overflow-y-scroll" : "overflow-hidden"
      }`}
    >
      <div>
        <button
          onClick={closeModal}
          className="z-20 text-2xl top-20 left-9 bg-[#63636338] w-10 h-10 rounded-full  text-white fixed  hover:text-black transtion-all duration-300 "
        >
          X
        </button>
        {gallery && (
          <>
            <button
              onClick={() => backToGallery()}
              className="z-20 text-2xl top-20 right-9 bg-[#63636338] w-10 h-10 rounded-full  text-white fixed hover:text-black transtion-all duration-300  "
            >
              ←
            </button>
          </>
        )}
      </div>

      <span className="bg-white  z-0 top-0 left-0 fixed w-full h-screen "></span>

      <div className=" z-10 w-full ">
        {!gallery ? (
          <PhotoShow
            mapBook={mapBook}
            nameOfBook={nameOfBook}
            openGallery={openGallery}
            HeaderImage={ImgOfModal}
            parraf={parraf}
          />
        ) : (
          <ModalGallery
            image={image}
            btnSlider={btnSlider}
            bookOfModal={bookOfModal}
            mapBook={mapBook}
            next={next}
            prev={prev}
            indexImage={indexImage}
            nameOfBook={nameOfBook}
          />
        )}
      </div>
    </div>
  );
}
