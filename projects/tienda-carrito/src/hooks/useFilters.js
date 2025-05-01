import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'
export function useFilters(){
    const {filters,setFilters}=useContext(FiltersContext)
      const filterProducts = (products) => {
        return products.filter(product => {
          return (
            product.Price >= filters.minPrice &&
            (filters.Category == 'all' ||
              product.Category == filters.Category
            )
          )
        })
      }
      return{filters,filterProducts,setFilters}
}