import { useState } from "react";
import Modal from "./Modal";

export default function Gallery(props) {
  const [bookOfModal, setBookOfModa] = useState([]);
  const [TitleOfModal, setTitleOfModa] = useState("");
  const [ImgOfModal, setImgOfModa] = useState("");
  const [NoRepeat, setNoRepeat] = useState(false);

  const { BooksOnDB, setIsOpenModal, isOpenModal } = { ...props };
  const bodyChange = document.querySelector("#body");

  const openModal = (book, title, img) => {
    /* Funcion para que el modal no se abra en dispositivos moviles */
    console.log(book);
    window.innerWidth > 767 && setIsOpenModal(true);
    setBookOfModa(book);
    setTitleOfModa(title);
    setImgOfModa(img);
    window.scroll(0, 0);
    bodyChange.classList.add("overflow-hidden");
  };
  const closeModal = () => {
    /* Funcion para que el modal no se abra en dispositivos moviles */
    setIsOpenModal(false);
    bodyChange.classList.remove("overflow-hidden");
    window.scrollTo("BOOKS");
  };
  return (
    <div id="BOOKS">
      <h4 className="text-4xl text-center bold m-4">Books</h4>
      <div className="md:grid  md:gap-2 md:grid-cols-2 m-2  ">
        {BooksOnDB.map((book) => {
          return (
            <>
              {book.bookName !== "CarrouselMobile" && (
                <div>
                  <div
                    className="flex sticky overflow-hidden m-4 "
                    key={book.bookName}
                  >
                    <span
                      onClick={() =>
                        openModal(
                          book.imgs.book,
                          book.bookName,
                          book.imgs.book[3].img.result
                        )
                      }
                      className="h-96 w-full  bg-transparent-white peer hover:bg-transparent transition duration-300 cursor-pointer z-10 "
                    ></span>
                    {book.imgs.book.map((imgs, i) => {
                      return (
                        <>
                          {i >= 1 && (
                            <>
                              <img
                                loading="lazy"
                                className="h-96 opacity-100 odd:peer-hover:opacity-0 odd:peer-hover:-translate-x-full absolute transition-all top-0 left-0 w-full  drop-shadow-md duration-700"
                                key={imgs.img.result}
                                src={imgs.img.result}
                                alt={imgs.img.result}
                              />
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                  <h4 className="text-center text-2xl m-4  ">
                    {book.bookName}
                  </h4>
                </div>
              )}
              
              {(isOpenModal) && (
                <>
                  <Modal
                    bookOfModal={bookOfModal}
                    ImgOfModal={ImgOfModal}
                    nameOfBook={TitleOfModal}
                    closeModal={closeModal}
                    setNoRepeat={setNoRepeat}
                    />
                    {console.log(NoRepeat)}
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
