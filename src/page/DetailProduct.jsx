import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import { getDetailItems } from "../services/product.services";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const [detail, setDetail] = useState ({});
  const {id} = useParams();

  useEffect(() => {
    getDetailItems(id, (data) => {
        setDetail(data)
        console.log(data)
    })
  }, [id])
  
  return (
    <>
      <Navbar />
      <div className="flex font-sans">
            <div className="flex-none w-48 mx-3 my-2 relative">
                <img src={detail.product_img} alt={detail.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {detail.product_name}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                    {detail.product_code}
                </div>
                <div className="w-full text-lg font-semibold text-slate-700 mt-2">
                    Rp {detail.product_price}
                </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                </div>
                <p className="text-sm text-slate-700">
                    {detail.id}
                </p>
            </form>
            </div>
    </>
  )
}

export default DetailProduct