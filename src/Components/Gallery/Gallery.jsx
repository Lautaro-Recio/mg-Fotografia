import { useState } from "react";
import Modal from "./Modal";

export default function Gallery(props) {
  const [bookOfModal, setBookOfModa] = useState([]);
  const [TitleOfModal, setTitleOfModa] = useState("");
  const [ImgOfModal, setImgOfModa] = useState("");
  const [parraf, setParraf] = useState("");

  const { BooksOnDB, setIsOpenModal, isOpenModal } = { ...props };
  const bodyChange = document.querySelector("#body");
  BooksOnDB.sort((a, b) => {
    if (a.imgs.order > b.imgs.order) {
      return 1;
    }
    if (a.imgs.order < b.imgs.order) {
      return -1;
    }
    return 0;
  });
  const openModal = (book, title, img,p) => {
    /* Funcion para que el modal no se abra en dispositivos moviles */
    window.innerWidth > 767 && setIsOpenModal(true);
    setBookOfModa(book);
    setTitleOfModa(title);
    setImgOfModa(img);
    setParraf(p)
    window.scroll(0, 0);
    bodyChange.classList.add("overflow-hidden");
  };
  const closeModal = () => {
    /* Funcion para que el modal no se abra en dispositivos moviles */
    setIsOpenModal(false);
    bodyChange.classList.remove("overflow-hidden");
    window.scrollTo("BOOKS");
  };





  /* CENTRAR SECCION DE GALLERY */
  return (
    <div id="#PROYECTOS">
      <h4 className="text-4xl text-center bold m-4">Books</h4>
      <div className="md:grid  md:gap-2 md:grid-cols-2 m-2   ">
        {BooksOnDB.map((book) => {
          return (
            <>
              {book.imgs.order !== 0 && (
                <div>
                  <div
                    className="flex sticky   max-w-[40rem] overflow-hidden m-4 "
                    key={book.bookName}
                  >
                    <span
                      onClick={() =>
                        openModal(
                          book.imgs.book,
                          book.bookName,
                          book.imgs.header,
                          book.imgs.parraf
                        )
                      }
                      className="h-96 w-full  bg-transparent-white peer hover:bg-transparent transition duration-300 cursor-pointer z-10 "
                    ></span>
                    <img
                      loading="lazy"
                      className="h-96 opacity-100 odd:peer-hover:opacity-0 odd:peer-hover:-translate-x-full absolute transition-all top-0 left-0 w-full  drop-shadow-md duration-700"
                      src={book.imgs.presentation2}
                      key={book.imgs.presentation2}
                      alt={book.imgs.presentation2}
                    />
                    <img
                      loading="lazy"
                      className="h-96 opacity-100 odd:peer-hover:opacity-0 odd:peer-hover:-translate-x-full absolute transition-all top-0 left-0 w-full  drop-shadow-md duration-700"
                      key={book.imgs.presentation1}
                      src={book.imgs.presentation1}
                      alt={book.imgs.presentation1}
                    />
                  </div>
                  <h4 className="text-center text-2xl m-4  ">
                    {book.bookName}
                  </h4>
                </div>
              )}

              {isOpenModal && (
                <>
                  <Modal
                    bookOfModal={bookOfModal}
                    ImgOfModal={ImgOfModal}
                    nameOfBook={TitleOfModal}
                    closeModal={closeModal}
                    parraf={parraf}
                  />
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
