import ButtonNext from "../Icons/ButtonNext";
import ButtonPrev from "../Icons/ButtonPrev";

export default function ModalGallery(props) {
  const { image, btnSlider, bookOfModal, mapBook, next, prev, indexImage, nameOfBook} = { ...props };
  return (
    <>
      <p className="z-20 text-xl bottom-0 right-7 text-[#1f1f1f99] absolute ">
        {indexImage + 1}/{mapBook.length}
      </p>
      <p className="z-20 uppercase text-xl bottom-0 left-4 text-[#1f1f1f99] absolute ">
        {nameOfBook}
      </p>
      <div className="relative items-center justify-center h-screen overflow-hidden flex">
        <img src={image} className="md:h-screen py-10 drop-shadow-lg " alt="" />
        <div
          ref={btnSlider}
          className=" absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-between px-3"
        >
          <button
            onClick={() => prev(bookOfModal)}
            className="bg-light-grayish-blue w-14 h-14 rounded-full justify-center flex items-center"
          >
            <ButtonPrev />
          </button>
          <button
            onClick={() => next(bookOfModal, mapBook.length)}
            className="bg-light-grayish-blue w-14 h-14 rounded-full justify-center flex items-center "
          >
            <ButtonNext />
          </button>
        </div>
      </div>
    </>
  );
}
