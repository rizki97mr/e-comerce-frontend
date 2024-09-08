import React from "react";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-2 py-4">
        <div className="bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/06/28/15/26/fashion-1484855_1280.jpg')]"></div>
        <div className="bg-white h-96">
          <h1 className="flex items-center justify-center w-full pt-24 mx-2 text-2xl font-semibold text-red-500 font-link py-30">
            Special Edition!!!
          </h1>
          <h2 className="flex items-center justify-center w-full py-4 mx-2 text-2xl font-semibold font-link text-stone-600 py-30">
            Bundle : Grey Jean, White Shirt & Brown Boots
          </h2>
          <span className="flex items-center justify-center w-full mx-2 text-2xl font-extrabold font-link text-stone-800 py-30">
            Rp. 1.300.000.00
          </span>
          <div className="flex items-center justify-center w-full py-6">
            <button className="px-4 py-2 font-bold text-white rounded-lg bg-stone-600 hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full bg-white h-96">
          <h1 className="flex items-center justify-center w-full pt-24 mx-2 text-2xl font-semibold text-red-500 font-link py-30">
            Special Edition!!!
          </h1>
          <h2 className="flex items-center justify-center w-full py-4 mx-2 text-2xl font-semibold font-link text-stone-600 py-30">
            Bundle : Grey Jean, White Shirt & Brown Boots
          </h2>
          <span className="flex items-center justify-center w-full mx-2 text-2xl font-extrabold font-link text-stone-800 py-30">
            Rp. 1.300.000.00
          </span>
          <div className="inline-flex items-center justify-center w-full py-6">
            <button className="px-4 py-2 font-bold text-white rounded-lg bg-stone-600 hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/06/28/15/26/fashion-1484855_1280.jpg')]"></div>
      </div>
    </>
  );
};

export default Banner;
