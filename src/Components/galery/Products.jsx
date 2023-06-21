import MainGalery from "../galery/Slider/MainGalery"
import logo from "../assets/logo.png"

/* Array afuera para que no se recague con el componente */

const imgs=[logo]
const imgsSmall=[logo]

const Products =() =>{
    return(
        <div className="grid grid-cols-1 md:mt-10 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-88px-3)] md:container mx-auto">
            <MainGalery imgs={imgs} imgsSmall={imgsSmall}/>
        </div>
    )
}

export default Products