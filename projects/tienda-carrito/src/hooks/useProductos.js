import { useState,useEffect } from "react";   
import { ProductsFetch } from "../services/products.js"
export function useProductos() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const newProducts = await ProductsFetch()
                console.log(newProducts)
                setProducts(newProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        getProducts()
    }, [])
    
    return {products}

}