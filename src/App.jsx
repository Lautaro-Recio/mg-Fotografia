import NavBar from "./Components/NavBar/NavBar";
import Gallery from "./Components/Gallery/Gallery";
import QuienSoy from "./Components/QuienSoy/QuienSoy";
import LoadingContainer from "./Components/Loading/LoadingContainer";
import Footer from "./Components/Footer/Footer";
import Swipper from "./Components/Swipper/Swipper";
import { useEffect, useState } from "react";
import Modal from "./Components/Gallery/Modal";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
export default function App() {
  const [bookOfModal, setBookOfModa] = useState([]);
  const [TitleOfModal, setTitleOfModa] = useState("");
  const [ImgOfModal, setImgOfModa] = useState("");
  const [parraf, setParraf] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const bodyChange = document.querySelector("#body");

  const openModal = (book, title, img, p) => {
    /* Funcion para que el modal no se abra en dispositivos moviles */
    window.innerWidth > 767 && setIsOpenModal(true);
    setBookOfModa(book);
    setTitleOfModa(title);
    setImgOfModa(img);
    setParraf(p);
    window.scroll(0, 0);
    bodyChange.classList.add("overflow-hidden");
  };
  const [BooksOnDB, setBooksOnDB] = useState([]);
  const getData = async () => {
    const dbCollection = await getDocs(collection(db, "books"));
    try {
      const booksOnFirebase = [];
      dbCollection.forEach((doc) => {
        const book = { bookName: doc.id, imgs: doc.data() };
        booksOnFirebase.push(book);
      });

      setBooksOnDB(booksOnFirebase);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`font-Montserrat tracking-wider overflow-hidden `}>
      {BooksOnDB.length === 0 ? (
        <LoadingContainer />
      ) : (
        <>
          <NavBar />
          <Swipper BooksOnDB={BooksOnDB} />
          <QuienSoy />
          <Gallery openModal={openModal} BooksOnDB={BooksOnDB} />
          {isOpenModal && (
            <>
              <Modal
                bookOfModal={bookOfModal}
                ImgOfModal={ImgOfModal}
                nameOfBook={TitleOfModal}
                setIsOpenModal={setIsOpenModal}
                parraf={parraf}
              />
            </>
          )}
          <Footer BooksOnDB={BooksOnDB} />
        </>
      )}
    </div>
  );
}
