export default function PhotoShow(props) {
  const { mapBook, openGallery, HeaderImage, nameOfBook,parraf } = { ...props };
  mapBook.sort((a,b)=>{

    if (a.img.position > b.img.position) {
      return 1;
    }
    if (a.img.position < b.img.position) {
      return -1;
    }
    return 0;
  })

 
  return (
    <>
      {HeaderImage && (
        <div className="h-screen w-full md:w-screen overflow-x-hidden">
          <div className=" sticky h-screen justify-center  items-center overflow-hidden">
            <img
              loading="lazy"
              className="md:p-0 pr-3 mt-2 md:mb-0 mb-20 "
              src={HeaderImage}
              alt=""
            />
            <div className=" absolute bg-white w-full md:w-2/4 h-[60%] md:h-[40%] md:p-6 p-2 md:left-10 top-[60%]">
              <h4 className="md:text-3xl text-2xl md:mb-2">{nameOfBook}</h4>
              <p className=" p-2 text-base">
                {parraf}
              </p>
            </div>
          </div>
          <div className="md:columns-3 block gap-x-6 py-16 [break-inside:avoid] p-4 md:p-20">
            {mapBook.map((imgs, i) => {
              return (
                <img
                  loading="lazy"
                  className="mb-4 cursor-pointer hover:scale-105 transition-all duration-500"
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
