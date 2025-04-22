
import { searchMovies } from '../services/movies.js'
import { useState } from 'react'
export function useMovies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  

  const getMovies = async ({ query }) => {
    
    try {
      setLoading(true)
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (e) {
      console.log('Error en la peticion', e)
    }finally{
      setLoading(false)
    }
    
  }
  return { movies, getMovies,loading }
}