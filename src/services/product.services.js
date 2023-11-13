import axios from "axios"

export const getProducts = async (params) => {
    try {
        const response = await axios.get("https://sistemtoko.com/public/demo/product",{params})
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getCategories = async (params) => {
    try {
        const response = await axios.get("https://sistemtoko.com/public/demo/cat",{params})
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getDetailItems = (id, callback) => {
    axios.get(`https://sistemtoko.com/public/demo/single/${id}`)
        .then((res) => {
            callback(res.data);
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}
