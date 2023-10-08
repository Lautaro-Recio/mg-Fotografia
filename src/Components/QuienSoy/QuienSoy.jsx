import fotografaRandom from "../assets/fotografaRandom.jpeg";

export default function QuienSoy() {
  return (
    <div id="¿QUIEN SOY?" className="">
      <div className="md:grid md:grid-cols-2 ">
        <h4 className="text-4xl md:hidden block text-left  border-b-2 border-black py-4   bold m-4 ">
          ¿Quien soy?
        </h4>

        <div>
          <img loading="lazy" src={fotografaRandom} alt="" />
        </div>
        <div className="sticky block py-4 justify-center items-center">
          <h4 className="text-3xl text-[#898269] uppercase md:block hidden text-end  border-b-2 border-[#898269] py-4 mx-20  m-4 ">
            ¿Quien soy?
          </h4>
          <p className="md:px-20 md:py-10 text-xl tracking-wider    px-4 m-4 ">
            Bienvenidos, mi nombre es Milagros Griguol , fotografa especializada
            en moda y retrato. La fotografia es la posibilidad de poder captar
            la belleza en los pequeños detalles, brindando la oportunidad de
            contar historias unicas a traves de las imagenes. El retrato
            fotografico permite capturar la humanidad en su forma más cruda y
            auténtica. Es un medio para congelar momentos y preservar cada
            rostro con su propia historia, expresiones y singularidad de cada
            persona. Ademas, el poder combinar el mundo de la moda, a la que
            considero arte en movimiento constante, con mi pasion por la
            fotografia, me permitie capturar en cada sesion la escencia de la
            misma y la excelencia de sus productos. Cada clic de mi cámara es un
            intento de detener el tiempo y compartir la magia que veo a través
            del objetivo. Espero que disfrutes explorando mi trabajo tanto como
            disfruto creándolo!
          </p>
        </div>
      </div>
    </div>
  );
}
