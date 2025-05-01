export const ProductsFetch = async () => {
    try {
        const response = await fetch('https://localhost:44361/api/productos/obtener')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching products:', error)
        throw error
        
    }
}



