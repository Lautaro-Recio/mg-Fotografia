import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
export default function Footer() {
  const [data, setData] = useState("");
  const getFooter = async () => {
    const dbCollection = await getDocs(collection(db, "books"));
    try {
      const booksOnFirebase = [];
      dbCollection.forEach((doc) => {
        const book = { imgs: doc.data() };
        if (doc.id === "Footer") booksOnFirebase.push(book);
      });
      booksOnFirebase.forEach((doc) => {
        setData(doc.imgs.book[0].img.result);
      });
    } catch (error) {
      console.error(error);
    }
  };
  getFooter();

  return (
    <div id="#CONTACTO" className={`h-screen mb-2 mt-10 md:p-4 `}>
      <div className="md:grid md:grid-cols-3 md:px-10 px-4 md:text-left text-center justify-center ">
        <div className="md:py-4 z-10 md:col-span-2  md:px-8 ">
          <h4 className="text-center text-3xl pt-4 mb-10 z-0 border-b-2 pb-4 border-black">
            Contacto
          </h4>
          <p className="text-xl text-center mb-4">
            ¡Contactame y 
            <span className="opacity-0">a</span>
            <span className="bold text-gray-500 uppercase">
              hagamos realidad
            </span>
            <span className="opacity-0">a</span>
            eso que tanto imaginas!
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
          <div className="px-4 ">
            <a
              target="blank"
              href="https://www.instagram.com/milagrosgriguol.ph/"
              className="flex gap-4 md:mx-2 my-8 justify-start items-center cursor-pointer md:text-xl text-lg border-2 border-gray-200 w-full md:w-3/5 tracking-tight  rounded-md  md:p-4 py-2 px-2 hover:bg-gray-300 hover:text-white hover:tracking-wide hover:text-bold transition-all"
            >
              <ion-icon size="large" name="logo-instagram"></ion-icon>
              <p>milagrosgriguol.ph</p>
            </a>
            <a
              href="mailto:milagrosgriguol.ph@gmail.com"
              target="blank"
              className="flex gap-4 md:mx-2 my-8 justify-start items-center cursor-pointer md:text-xl text-lg border-2 border-gray-200 w-full md:w-3/5 tracking-tight  rounded-md  md:p-4 py-2 px-2 hover:bg-gray-300 hover:text-white hover:tracking-wide hover:text-bold transition-all"
            >
              <ion-icon size="large" name="mail-outline"></ion-icon>
              <p>milagrosgriguol.ph@gmail.com</p>
            </a>
          </div>
        </div>
        <img
          src={data}
          className=" w-full mt-4 h-full md:block hidden "
          alt=""
        />
      </div>
    </div>
  );
}
