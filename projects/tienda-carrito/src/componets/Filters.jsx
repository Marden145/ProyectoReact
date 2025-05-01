import './Filters.css'
import {  useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
export function Filters(){
const { filters,setFilters } = useFilters()
const priceId=useId()
const categoryId=useId()
const handleChangeMinPrice=(event)=>{
    setFilters(prevState=>({
        ...prevState,
        minPrice: event.target.value
    })) 
}
const handleChangeCategory=(event)=>{
    setFilters(prevState=>({
        ...prevState,
        Category: event.target.value
    }))
}

   return(
    <section className="filters">
    <div>
        <label htmlFor={priceId}>Price</label>
        <input 
        type='range'
        id={priceId}
        min='0' 
        max='1000'
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
    </div>
    <div>
        <label htmlFor={categoryId}>Categoria</label>
        <select id={categoryId} onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Celulares</option>
        </select>
    </div>
</section>
   )
}