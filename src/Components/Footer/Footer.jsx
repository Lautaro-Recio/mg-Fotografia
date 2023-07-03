import contatco from "../assets/contatco.jpg";
export default function Footer() {
  return (
    <div className="h-screen ">
      <h4 className="text-center text-3xl mb-4">Contacto</h4>
      <div className="grid grid-cols-2   justify-center ">
        <img src={contatco} className="p-4 mx-[20%] h-screen " alt="" />
        <div className="py-8">
          <p className="text-2xl mb-4">
            ¡Contactame y{" "}
            <span className="bold text-gray-500">hagamos realidad </span> eso
            que tanto imaginas!
          </p>
          <p className="text-lg mr-10 pl-4">
             ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            modi enim eos facilis saepe dolorum maxime excepturi quod ab
            doloremque placeat similique deleniti vero distinctio dolor. Et,
            doloremque! Modi, ipsum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit exercitationem inventore sapiente nemo
            neque, quidem fugit totam maiores veritatis laboriosam explicabo
            molestiae voluptatum in accusantium. Possimus natus aliquid voluptas
            quo?
          </p>
          <div className="">
            <a href="#" className="flex gap-4 mx-2 my-8 justify-start items-center cursor-pointer text-xl border-2 border-gray-200 w-3/5 tracking-tight  rounded-md  p-4 hover:bg-gray-300 hover:text-white hover:tracking-wide hover:text-bold transition-all">
              <ion-icon size="large"  name="logo-instagram"></ion-icon>
              <p>miligriguol_ph</p>
            </a>
            <a href="#" className="flex gap-4 mx-2 my-8 justify-start items-center cursor-pointer text-xl border-2 border-gray-200 w-3/5 tracking-tight  rounded-md  p-4 hover:bg-gray-300 hover:text-white hover:tracking-wide hover:text-bold transition-all">
              <ion-icon size="large"  name="mail-outline"></ion-icon>
              <p>milagrosgriguol.ph@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
