import { useEffect, useState, useRef } from "react"
import Banner from "../components/Banner"
import { FaStore } from "react-icons/fa6";
import { MdSearch, MdAddShoppingCart, MdSmartphone } from "react-icons/md";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import Footer from "../components/Footer"
import Jumbotron from "../components/Jumbotron"
import { JumbotronFooter } from "../components/JumbotronFooter"
import CardCategory from "../components/CardCategory"
import { getProducts } from "../services/product.services";
import { Link } from "react-router-dom";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const inputEl = useRef(null);

    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
      };
    
      const fetchData = async () => {
        const data = await getProducts({
            search_name: search
        })
        setProducts(data.aaData)
    }

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    const handleSubmit = e => {
      e.preventDefault()
      fetchData()
  }

    useEffect(() => {
        fetchData();
    }, [])
  
  return (
    <>
    <nav>
        <div className="w-full bg-stone-100 px-12 md:flex md:justify-between md:items-center">
            <div className="flex justify-between items-center">
                <MdSmartphone />
                <span className="font-link text-gray-800 text-base font-medium ">
                    Download Arshion APP
                </span>
            </div>
            <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
                <span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Help</span>
                <span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Langguage</span>
                <span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Sign in</span>
                <span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">|</span>
                <span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Sign Up</span>
                {/* <button type="button" className="px-3 py-1 text-xs font-medium text-center text-white rounded-lg bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50">Sign Up</button> */}
            </div>

            </div>
        </div>
        <div className="w-full px-12 py-2 shadow mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center">
                <FaStore className="h-6 w-5"/>
                <h1 className="font-link text-gray-800 text-xl font-bold pr-24 md:text-2xl hover:text-gray-700">
                    ARSHION
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center px-30">
                    <a className="my-1 text-sm font-bold text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">MEN</a>
                    <a className="my-1 text-sm font-bold text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">WOMEN</a>
                    <a className="my-1 text-sm font-bold text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">KIDS</a>
                </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="relative flex w-full flex-wrap items-stretch">
                        <input 
                        ref={inputEl}
                        onChange={handleChange}
                        type="search"
                        className="relative flex-auto rounded  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                    <button onClick={onButtonClick} className="px-6 font-bold"><MdSearch className="text-xl" /></button>
                    <button className="px-6 font-bold"><AiOutlineHeart className="text-xl" /></button>
                    <button className="px-6 font-bold"><MdAddShoppingCart className="text-xl" /></button>
                    <button className="px-6 font-bold"><AiOutlineUser className="text-xl" /></button>
                </div>
              </form>
            </div>
        </div>
    </nav>
    <Jumbotron />
    <div>
      <h1 className='font-link w-full inline-flex justify-center items-center pt-6 text-2xl font-semibold'>
          NEW ARRIVAL!!
      </h1>
      <span className="font-link w-full inline-flex justify-center items-center text-medium font-base">
          Summer Special Edition
      </span>
      <div className="flex flex-wrap justify-center py-3 mx-6">
          {products.map(product => (
          <Link to={`/product/${product.id}`}>
          <div className="font-medium text-green-600 dark:text-Green-500 hover:underline">
            <div key={product.id} className="bg-white w-72 h-96 shadow-md rounded m-3">
                <div className="h-3/4">
                    <img className="w-full h-full object-cover rounded-t" src={product.photo} alt="piña" />
                </div>
                <div className="w-full h-1/4 p-3">
                    <a href="#" className=" hover:text-yellow-600 text-gray-700">
                    <span className="text-lg font-medium uppercase tracking-wide w-full inline-flex justify-center items-center">{product.name}</span>
                    </a>
                    <p className="text-gray-600 text-base font-bold w-full inline-flex justify-center items-center">{product.currency} {product.price} </p>
                </div>
            </div>
          </div>
          </Link>
            ))}
      </div>
    </div>
    <Banner />
    <CardCategory />
    <JumbotronFooter />
    <Footer />
    </>
  )
}

export default Home