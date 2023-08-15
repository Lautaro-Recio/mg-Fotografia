import NavBar from "./Components/NavBar/NavBar";
import Gallery from "./Components/Gallery/Gallery";
import QuienSoy from "./Components/QuienSoy/QuienSoy";
import LoadingContainer from "./Components/Loading/LoadingContainer";
import Footer from "./Components/Footer/Footer";
import Swipper from "./Components/Swipper/Swipper";
import { useEffect, useState } from "react";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
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
    <div className={`font-Caudex  overflow-hidden `}>
      {BooksOnDB.length === 0 ? (
        <LoadingContainer />
      ) : (
        <>
          <NavBar isOpenModal={isOpenModal} />
          <Swipper BooksOnDB={BooksOnDB} />
          <QuienSoy />
          <Gallery
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
            BooksOnDB={BooksOnDB}
          />
          <Footer BooksOnDB={BooksOnDB} />
        </>
      )}
    </div>
  );
}
