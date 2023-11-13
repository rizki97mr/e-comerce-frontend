import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CardCategory = () => {
    const [categories, setCategories] = useState([]);

    const listCategories = async () => {
        try {
            let response = await axios.get("https://sistemtoko.com/public/demo/cat")
            setCategories(response.data.aaData)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        listCategories();
    }, [])

  return (
    <div>
            <h1 className='font-link w-full inline-flex justify-center items-center pt-6 text-2xl font-semibold'>
                CATEGORIES
            </h1>
            <div className="flex flex-wrap justify-center py-4 mx-64">
                {categories.map(category => (
                <Link to={`/product/${category.product_category_id}`} className="font-medium text-green-600 dark:text-Green-500 hover:underline">
                <div key={category.product_category_id} className="bg-cover rounded-lg w-48 h-56 shadow-md rounded mx-1 my-1 bg-[url('https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=2127&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">                  
                        <h1 className="text-lg text-white font-medium uppercase tracking-wide py-44 w-full inline-flex justify-center items-center">{category.product_category_name}</h1>          
                </div>
                </Link>
                 ))}
            </div>
    </div>
  )
}

export default CardCategory