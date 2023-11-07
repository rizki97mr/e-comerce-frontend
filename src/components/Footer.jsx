import { FaStore, FaInstagram, FaSquareFacebook, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    {/* <!-- Footer container --> */}
<footer
  className="bg-neutral-100 mt-10 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

  {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
  <div className="mx-8 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* <!-- Tailwind Elements section --> */}
      <div className="flex justify-center items-center">         
          <h1 className="flex wrap font-link text-white text-xl font-semibold pr-24 md:text-2xl">
              <FaStore /> ARSHION
          </h1>
      </div>
      {/* <!-- Products section --> */}
      <div className="">
        <h6
          className="mb-4 flex justify-center font-bold uppercase md:justify-start">
          About Arshion
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            Information
            </a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            Store Location
            </a>
        </p>
      </div>
      {/* <!-- Useful links section --> */}
      <div className="">
        <h6
          className="mb-4 flex justify-center font-bold uppercase md:justify-start">
          Help
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >F&Q</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Payment Method</a
          >
        </p>
        <p className="mb-4">
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Privacy Policy</a
          >
        </p>
        <p>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200"
            >Contact Me</a
          >
        </p>
      </div>
      {/* <!-- Contact section --> */}
      <div>
        <h6
          className="mb-4 flex justify-center font-bold uppercase md:justify-start">
          Follow ME
        </h6>
        <div className="mb-4 flex items-center justify-center md:justify-start">
            <button className="pr-2 font-bold"><FaInstagram className="text-xl" /></button>
            <button className="px-2 font-bold"><FaSquareFacebook className="text-xl" /></button>
            <button className="px-2 font-bold"><FaSquareXTwitter className="text-xl" /></button>
            <button className="px-2 font-bold"><FaYoutube className="text-xl" /></button>
        </div>
      </div>
    </div>
  </div>

  {/* <!--Copyright section--> */}
  <div className="bg-neutral-100 p-6 text-center dark:bg-neutral-600 dark:text-neutral-200">
    <span className="font-light text-base text-slate-50">
      © 2023 ARSHION.ALL RIGHT RESEARVE OWNED
    </span>
  </div>
</footer>
    </>
  )
}

export default Footer