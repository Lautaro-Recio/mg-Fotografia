import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import FadeIn from "./FadeIn";
export default function Swipper(props) {
  /* GRAFICAR IMGS EN EL SLIDER */
  const { BooksOnDB } = { ...props };

  return (
    <div className="sticky">
     
      {BooksOnDB.length > 0 && (
        <Swiper
          effect={"fade"}
          className="md:h-screen  "
          key={BooksOnDB.bookName}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          id="INICIO"
        >
          <>
            {BooksOnDB.map((book) => {
              {
                return (
                  <>
                    {book.bookName === "Carrousel" &&
                      book.imgs.book.map((imgs) => {
                        return (
                          <SwiperSlide
                            className="hidden md:block"
                            key={imgs.img.result}
                          >
                            <FadeIn/>
                            <img
                              loading="lazy"
                              className="w-full aspect[16/16] hidden md:block"
                              src={imgs.img.result}
                              alt="Img of Book"
                            />
                          </SwiperSlide>
                        );
                      })}
                  </>
                );
              }
            })}

            {BooksOnDB.map((book) => {
              {
                return (
                  <>
                    {book.bookName === "CarrouselMobile" &&
                      book.imgs.book.map((imgs) => {
                        return (
                          <SwiperSlide key={imgs.img.result}>
                            <img
                              loading="lazy"
                              className="w-full h-screen aspect[16/16] md:hidden"
                              src={imgs.img.result}
                              alt="Img of Book"
                            />
                          </SwiperSlide>
                        );
                      })}
                  </>
                );
              }
            })}
          </>
        </Swiper>
      )}
    </div>
  );
}
