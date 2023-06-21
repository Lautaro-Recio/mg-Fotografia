import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
export default function Swipper(props) {
  /* GRAFICAR IMGS EN EL SLIDER */
  const {BooksOnDB} = {...props}
  
  return (
    <>
      {BooksOnDB.length > 0 && (
        <Swiper
          effect={"fade"}
          className="h-screen "
          key={BooksOnDB.bookName}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          id="INICIO"
        >
          <>
            {BooksOnDB.map((book) => {
              {
                return (
                  <>
                    {(book.bookName === "Carrousel" )  &&
                      book.imgs.book.map((imgs) => {
                        return (
                          <SwiperSlide key={imgs.img.result}>
                            <img
                              loading="lazy"
                              className="w-full"
                              src={imgs.img.result}
                              alt="Img of Book"
                            />
                          </SwiperSlide>
                        );
                      })
                    }
                  </>
                );
              }
            })}
          </>
        </Swiper>
      )}
    </>
  );
}
