export default function Modal(props) {
const {bookOfModal, closeModal } ={...props}
  return (
    <div className="absolute w-full flex h-screen p-14 top-0 z-40 overflow-scroll">
      <button
        onClick={closeModal}
        className="z-20 text-xl top-4 left-10 text-transparent-gray absolute   "
      >
        X
      </button>
      <span className="bg-white  z-0 top-0 left-0 fixed w-full h-full "></span>
      <div className=" z-10 w-full ">
        <div className="columns-3 gap-x-4 py-4 [break-inside:avoid] p-20">
          {bookOfModal.map((imgs) => {
            return (
                <img
                loading="lazy"
                  className="mb-2 "
                  key={imgs.img.DateToDB}
                  src={imgs.img.result}
                  alt={imgs.img.result}
                />
            );
          })}
        </div>
      </div>
    </div>
  );
}
