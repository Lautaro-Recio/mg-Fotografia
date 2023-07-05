import contatco from "../assets/contatco.jpg";
export default function Footer() {
  /* QUE LA FOTO DE FONDO ESTE JUSTAMENTE AL FONDO EN MOBILE VERSION */
  return (
    <div className="h-screen mb-2 mt-10 md:p-4 ">
      <h4 className="text-center text-3xl mb-4 z-0">Contacto</h4>
      <div className="md:grid md:grid-cols-3 md:px-20 px-4 md:text-left text-center justify-center ">
        <div className="md:py-8 z-10 md:col-span-2  md:px-8 ">
          <p className="text-2xl mb-4">
            ¡Contactame y{" "}
            <span className="bold text-gray-500 uppercase">hagamos realidad </span> eso
            que tanto imaginas!
          </p>
          <p className="text-lg md:mr-10 text-center md:px-4 ">
            ipsum dolor sit amet consectetur adipisicing elit. Aliquid, modi
            enim eos facilis saepe dolorum maxime excepturi quod ab doloremque
            placeat similique deleniti vero distinctio dolor. Et, doloremque!
            Modi, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Impedit exercitationem inventore sapiente nemo neque, quidem
            fugit totam maiores veritatis laboriosam explicabo molestiae
            voluptatum in accusantium. Possimus natus aliquid voluptas quo?
          </p>
          <div className="px-4">
            <a
              href="#"
              className="flex gap-4 md:mx-2 my-8 justify-start items-center cursor-pointer md:text-xl text-lg border-2 border-gray-200 w-full md:w-3/5 tracking-tight  rounded-md  md:p-4 py-2 px-2 hover:bg-gray-300 hover:text-white hover:tracking-wide hover:text-bold transition-all"
            >
              <ion-icon size="large" name="logo-instagram"></ion-icon>
              <p>miligriguol_ph</p>
            </a>
            <a
              href="#"
              className="flex gap-4 md:mx-2 my-8 justify-start items-center cursor-pointer md:text-xl text-lg border-2 border-gray-200 w-full md:w-3/5 tracking-tight  rounded-md  md:p-4 py-2 px-2 hover:bg-gray-300 hover:text-white hover:tracking-wide hover:text-bold transition-all"
            >
              <ion-icon size="large" name="mail-outline"></ion-icon>
              <p>milagrosgriguol.ph@gmail.com</p>
            </a>
          </div>
        </div>
          <img
            src={contatco}
            className=" w-full mb-4 h-full md:static absolute top-0 z-0 "
            alt=""
          />
      </div>
    </div>
  );
}
