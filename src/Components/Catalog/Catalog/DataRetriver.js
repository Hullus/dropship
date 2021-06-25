import axios from 'axios'

export const getProducts = async () => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getCategories = async () => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products/categories')
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}
