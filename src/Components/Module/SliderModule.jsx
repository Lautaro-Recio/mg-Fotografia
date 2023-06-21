import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

import ButtonNext from "../Icons/ButtonNext";
import ButtonPrev from "../Icons/ButtonPrev";

const SliderModule = (props) => {
  const {
    imgs = [],
    imgsSmall = [],
    isOpenModal = true,
    closeModal = null,
  } = { ...props };
  const [image, setImage] = useState(0);
  const btnSlider = useRef(null);
  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);
  const next = () => {
    image === imgs.length - 1 ? setImage(0) : setImage(image + 1);
  };
  const prev = () => {
    image === 0 ? setImage(imgs.length - 1) : setImage(image - 1);
  };
  return (
    <div {...props}>
      {isOpenModal && (
        <button onClick={closeModal} className="md:grid-span-4 text-right ">
          X
        </button>
      )}
      <div className="col-span-4 relative flex  ">
        {/* aspect[16-9]" proporciona la img a la pantalla, para que no se aplaste */}
        {imgsSmall.map((small) => {
          return(
            <>
              {small.imgs.book.map((img)=>{
                 return (
                  <>
                    <img loading="lazy"  key={img.img.result} src={img.img.result} alt="" className="mx-2 odd:w-40 h-40 " />
                  </>
                );
              })}
            </>
          )
        })}

        {/* Los elementos con posicion absolute se adaptan al contenedor con position diferente a static(todos los componentes por defecto son static) por eso en el div que encierra los botones la position es relative*/}

        <div
          ref={btnSlider}
          className="md:hidden absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-between px-3"
        >
          <button
            onClick={prev}
            className="bg-light-grayish-blue w-10 h-10 rounded-full justify-center flex items-center"
          >
            <ButtonPrev />
          </button>
          <button
            onClick={next}
            className="bg-light-grayish-blue w-10 h-10 rounded-full justify-center flex items-center"
          >
            <ButtonNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderModule;

/* Terminar de adaptar el modulo para que se visualicen las imgs */
