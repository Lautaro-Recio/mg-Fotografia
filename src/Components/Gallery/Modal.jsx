import { useEffect, useRef, useState } from "react";
import ModalGallery from "./ModalGallery";
import PhotoShow from "./PhotoShow";

export default function Modal(props) {
  const { bookOfModal, closeModal, nameOfBook, ImgOfModal,setNoRepeat } = { ...props };
  const [mapBook, setmapBook] = useState([]);
  useEffect(() => {
    setNoRepeat(true)
    setmapBook(bookOfModal);
    
  }, [bookOfModal,setNoRepeat]);

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
    setImage(image)
    setindexImage(index);
    setGallery(true);
  };
  return (
    <div className={`absolute w-full flex h-screen p-0  top-0 z-40 ${!gallery ? "overflow-y-scroll": "overflow-hidden"}`}>
      <div>
        <button
          onClick={closeModal}
          className="z-20 text-2xl top-4 left-8  text-transparent-gray fixed  hover:text-black transtion-all duration-300 "
        >
          X
        </button>
        {gallery && (
          <>
            <button
              onClick={() => backToGallery()}
              className="z-20 text-2xl top-4 right-7 text-transparent-gray fixed hover:text-black transtion-all duration-300  "
            >
              ←
            </button>
            <p className="z-20 text-xl bottom-0 right-7 text-transparent-gray absolute ">
              {indexImage + 1}/{mapBook.length}
            </p>
            <p className="z-20 text-xl bottom-0 left-4 text-transparent-gray absolute ">{nameOfBook}</p>
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
          />
        ) : (
          <ModalGallery
            image={image}
            btnSlider={btnSlider}
            bookOfModal={bookOfModal}
            mapBook={mapBook}
            next={next}
            prev={prev}
          />
        )}
      </div>
    </div>
  );
}
