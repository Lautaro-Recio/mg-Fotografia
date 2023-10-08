
export default function Gallery(props) {
  const { BooksOnDB, openModal } = { ...props };
  BooksOnDB.sort((a, b) => {
    if (a.imgs.order > b.imgs.order) {
      return 1;
    }
    if (a.imgs.order < b.imgs.order) {
      return -1;
    }
    return 0;
  });

  //SEIS BOOKS POR ESO SE REPITE EL COMPONENTE
  /* CENTRAR SECCION DE GALLERY */
  return (
    <div id="PORTFOLIO">
      <h4 className="text-4xl text-center uppercase p-2 text-[#898269] border-b-2 border-[#898269] mx-24 bold my-4">
        Portfolio
      </h4>
      <div className="md:grid  md:gap-2 md:grid-cols-2 m-2   ">
        {BooksOnDB.map((book) => {
          return (
            <>
              {book.imgs.order !== 0 && (
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
                          book.imgs.header,
                          book.imgs.parraf
                        )
                      }
                      className="h-96 w-full  peer hover:bg-transparent transition duration-300 cursor-pointer z-10 "
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
                  <h4 className="text-center uppercase text-2xl m-4  ">
                    {book.bookName}
                  </h4>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
