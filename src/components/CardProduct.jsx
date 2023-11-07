import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CardProduct = () => {
    const [products, setProducts] = useState([]);

    const listProducts = async () => {
        try {
            let response = await axios.get("https://sistemtoko.com/public/demo/product")
            setProducts(response.data.aaData)
            // console.log(response.data.aaData)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        listProducts();
    }, [])

  return (
    <>
            <h1 className='font-link w-full inline-flex justify-center items-center pt-6 text-2xl font-semibold'>
                NEW ARRIVAL!!
            </h1>
            <span className="font-link w-full inline-flex justify-center items-center text-medium font-base">
                Summer Special Edition
            </span>
            <div className="flex flex-wrap justify-center py-3 mx-6">
                {products.map(product => (
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
                 ))}
            </div>
    </>
  )
}

export default CardProduct