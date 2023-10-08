import { useState, useEffect } from "react";
import img from "../assets/name2.png";
export default function FadeIn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Iniciamos un temporizador para alternar el estado de isVisible cada 3 segundos (3000 ms)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Cambia este valor según la duración deseada para cada estado
    const timer2 = setTimeout(() => {
        setIsVisible(false);
      }, 4000); // Cambia este valor según la duración deseada para cada estado
      
    // Limpieza del temporizador cuando el componente se desmonta
    return () => {
      clearInterval(timer);
      clearInterval(timer2);

    };
  }, []);

  return (
    <div className="flex absolute z-90 top-1/2 left-1/2  w-64 -translate-x-1/2 -translate-y-1/2 justify-center items-center">
      <div
        className={`transition-all transform duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <img src={img} alt="Logo" />
      </div>
    </div>
  );
}
