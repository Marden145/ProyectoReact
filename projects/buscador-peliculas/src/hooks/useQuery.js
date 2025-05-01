import { z } from "zod"
import { useState } from 'react'
import debounce from "just-debounce-it"
export function useQuery({ getMovies }){
    const validacionNombrePeli=z.string().min(3, { message: "Debe tener al menos 3 caracteres" }).refine(val => !/^\d+$/.test(val), { message: "No puedes tener solo numeros" })
    const[error,setError]=useState()
    const handleSubmit=(event)=>{
      event.preventDefault()
      const{query} =Object.fromEntries(new window.FormData(event.target))
      const results=validacionNombrePeli.safeParse(query)
      if(!results.success){
        const mensaje = results.error.errors[0].message
        setError(mensaje)
        getMovies({ query })
      }else{
        setError(null)
        getMovies({ query })
        
      }
    }
    const handleChange=(event)=>{
      const data=event.target.value
      const results=validacionNombrePeli.safeParse(data)
      if(!results.success){
        const mensaje = results.error.errors[0].message
        setError(mensaje)
        getMovies({ query:data })
      }else{
        setError(null)
        getMovies({ query:data })
      }
  
    }
    return{error,handleSubmit,handleChange}
}
