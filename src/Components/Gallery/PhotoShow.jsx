export default function PhotoShow(props) {
  const { mapBook, openGallery, HeaderImage, nameOfBook } = { ...props };

  /* Definir imagen de cabecera para esta seccion */
  return (
    <>
      {HeaderImage && (
        <div className="h-screen w-screen">
          <div className=" sticky justify-center  items-center overflow-hidden">
            <img
              loading="lazy"
              className="    mt-2  "
              src={HeaderImage}
              alt=""
            />
            <div className=" absolute bg-white w-2/4 h-[40%] p-6 left-10 top-[60%]">
              <h4 className="text-3xl mb-2">{nameOfBook}</h4>
              <p className="p-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, corrupti. Quos quam quisquam commodi libero velit
                veritatis rem alias enim, distinctio nostrum! Odit iste tenetur
                ducimus, ipsum nam architecto accusamus. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Dolores, laudantium.
                Repellendus, obcaecati veritatis soluta officia error reiciendis
                porro culpa ipsum autem nulla quisquam aperiam fugit temporibus
                pariatur quas illo molestias?
              </p>
            </div>
          </div>
          <div className="columns-3 gap-x-4 py-4 [break-inside:avoid] p-20">
            {mapBook.map((imgs, i) => {
              return (
                <img
                  loading="lazy"
                  className="mb-4 cursor-pointer"
                  onClick={() => openGallery(imgs.img.result, i, true)}
                  key={imgs.img.i}
                  src={imgs.img.result}
                  alt={imgs.img.result}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
