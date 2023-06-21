import logo from "../assets/logo.png";
export default function LoadingContainer() {
  return (
    <div className="h-screen items-center justify-center  flex">
      <img loading="lazy" className="absolute t-2/4 l-2/4 h-40 w-40" src={logo} alt="" />

      <div className="animate-spin grid grid-cols-2  h-60 w-60">
        <span className="bg-transparent h-full w-full rounded-tl-full"></span>
        <span className="bg-transparent h-full w-full border-t-8 border-r-8 border-gray-600 rounded-tr-full"></span>
        <span className="bg-transparent h-full w-full border-b-8 border-l-8 border-gray-600 rounded-bl-full"></span>
        <span className="bg-transparent h-full w-full border-b-8 border-r-8 border-gray-600 rounded-br-full"></span>
      </div>
    </div>
  );
}
