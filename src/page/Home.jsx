import { useEffect, useState, useRef } from "react";
import Banner from "../components/Banner";
import { FaStore } from "react-icons/fa6";
import { MdSearch, MdAddShoppingCart, MdSmartphone } from "react-icons/md";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import { JumbotronFooter } from "../components/JumbotronFooter";
import CardCategory from "../components/CardCategory";
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
      search_name: search,
    });
    setProducts(data.aaData);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav>
        <div className="w-full px-12 bg-stone-100 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <MdSmartphone />
            <span className="text-base font-medium text-gray-800 font-link ">
              Download Arshion APP
            </span>
          </div>
          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <span className="my-1 text-sm font-medium text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">
                Help
              </span>
              <span className="my-1 text-sm font-medium text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">
                Langguage
              </span>
              <span className="my-1 text-sm font-medium text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">
                Sign in
              </span>
              <span className="my-1 text-sm font-medium text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">
                |
              </span>
              <span className="my-1 text-sm font-medium text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">
                Sign Up
              </span>
              {/* <button type="button" className="px-3 py-1 text-xs font-medium text-center text-white rounded-lg bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50">Sign Up</button> */}
            </div>
          </div>
        </div>
        <div className="w-full px-12 py-2 mx-auto shadow md:flex md:justify-between md:items-center">
          <div className="flex items-center">
            <FaStore className="w-5 h-6" />
            <h1 className="pr-24 text-xl font-bold text-gray-800 font-link md:text-2xl hover:text-gray-700">
              ARSHION
            </h1>
            <div className="flex flex-col items-center justify-center md:flex-row px-30">
              <a className="my-1 text-sm font-bold text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">
                MEN
              </a>
              <a className="my-1 text-sm font-bold text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">
                WOMEN
              </a>
              <a className="my-1 text-sm font-bold text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0">
                KIDS
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="relative flex flex-wrap items-stretch w-full">
                <input
                  ref={inputEl}
                  onChange={handleChange}
                  type="search"
                  className="relative flex-auto rounded  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button onClick={onButtonClick} className="px-6 font-bold">
                  <MdSearch className="text-xl" />
                </button>
                <button className="px-6 font-bold">
                  <AiOutlineHeart className="text-xl" />
                </button>
                <button className="px-6 font-bold">
                  <MdAddShoppingCart className="text-xl" />
                </button>
                <button className="px-6 font-bold">
                  <AiOutlineUser className="text-xl" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <Jumbotron />
      <div>
        <h1 className="inline-flex items-center justify-center w-full pt-6 text-2xl font-semibold font-link">
          NEW ARRIVAL!!
        </h1>
        <span className="inline-flex items-center justify-center w-full font-link text-medium font-base">
          Summer Special Edition
        </span>
        <div className="flex flex-wrap justify-center py-3 mx-6">
          {products.map((product) => (
            <Link to={`/product/${product.id}`}>
              <div className="font-medium text-green-600 dark:text-Green-500 hover:underline">
                <div
                  key={product.id}
                  className="m-3 bg-white rounded shadow-md w-72 h-96"
                >
                  <div className="h-3/4">
                    <img
                      className="object-cover w-full h-full rounded-t"
                      src={product.photo}
                      alt="piña"
                    />
                  </div>
                  <div className="w-full p-3 h-1/4">
                    <a
                      href="#"
                      className="text-gray-700  hover:text-yellow-600"
                    >
                      <span className="inline-flex items-center justify-center w-full text-lg font-medium tracking-wide uppercase">
                        {product.name}
                      </span>
                    </a>
                    <p className="inline-flex items-center justify-center w-full text-base font-bold text-gray-600">
                      {product.currency} {product.price}{" "}
                    </p>
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
  );
};

export default Home;
