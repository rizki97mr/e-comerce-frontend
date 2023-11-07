import React from 'react'

const Banner = () => {
  return (
    <>
        <div className="grid grid-cols-2 py-4">
            <div className="bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/06/28/15/26/fashion-1484855_1280.jpg')]"></div>
            <div className="bg-white h-96">
                <h1 className="flex font-link text-red-500 pt-24 mx-2 w-full inline-flex justify-center items-center py-30 font-semibold text-white text-2xl">
                    Special Edition!!!
                </h1>
                <h2 className="flex font-link text-stone-600 py-4 mx-2 w-full inline-flex justify-center items-center py-30 font-semibold text-white text-2xl">
                    Bundle : Grey Jean, White Shirt & Brown Boots
                </h2>
                <span className='font-link text-stone-600 mx-2 w-full inline-flex justify-center items-center py-30 font-extrabold text-white text-2xl'>
                    Rp. 1.300.000.00
                </span>
                <div className='w-full py-6 inline-flex justify-center items-center'>
                    <button className="bg-stone-600  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="w-full bg-white h-96">
            <h1 className="flex font-link text-red-500 pt-24 mx-2 w-full inline-flex justify-center items-center py-30 font-semibold text-white text-2xl">
                    Special Edition!!!
                </h1>
                <h2 className="flex font-link text-stone-600 py-4 mx-2 w-full inline-flex justify-center items-center py-30 font-semibold text-white text-2xl">
                    Bundle : Grey Jean, White Shirt & Brown Boots
                </h2>
                <span className='font-link text-stone-600 mx-2 w-full inline-flex justify-center items-center py-30 font-extrabold text-white text-2xl'>
                    Rp. 1.300.000.00
                </span>
                <div className='w-full py-6 inline-flex justify-center items-center'>
                    <button className="bg-stone-600  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/06/28/15/26/fashion-1484855_1280.jpg')]"></div>
        </div>
    </>
  )
}

export default Banner