import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import CardProduct from "../components/CardProduct"
import Footer from "../components/Footer"
import Jumbotron from "../components/Jumbotron"
import Navbar from "../components/Navbar"
import axios from "axios"
import { JumbotronFooter } from "../components/JumbotronFooter"
import CardCategory from "../components/CardCategory"

const Home = () => {

  const [products, setProducts] = useState([]);

    const listProducts = async () => {
        try {
            let response = await axios.get("https://sistemtoko.com/public/demo/product")
            setProducts(response.data.aaData)
            console.log(response.data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        listProducts();
    }, [])
  
  return (
    <>
    <Navbar />
    <Jumbotron />
    <CardProduct />
    <Banner />
    <CardCategory />
    <JumbotronFooter />
    <Footer />
    </>
  )
}

export default Home