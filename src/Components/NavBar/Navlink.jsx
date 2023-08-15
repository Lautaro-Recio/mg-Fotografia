const NavLink = (props) => {
  const { text, closeMenu } = { ...props };

  return (
    <>
      <a
        className="relative pb-2 bg-transparent cursor-pointer ml-8 my-4 md:my-2"
        href={`#${text}`}
        onClick={()=>closeMenu()}
        >
        <span className="peer text-2xl hover:text-transparent-gray tracking-tight hover:tracking-wide transition-all ">
          {text}
        </span>
        {/* peer-hover es para agrupar un hover entre dos elementos */}
        <span className=" h-[2px] block  w-full absolute bottom-0 left-0 transition duration-300 scale-x-0 peer-hover:bg-transparent-gray peer-hover:scale-x-100  "></span>
        {/* Span blanco adelante de la segunda foto  */}
      </a>
    </>
  );
};

export default NavLink;
