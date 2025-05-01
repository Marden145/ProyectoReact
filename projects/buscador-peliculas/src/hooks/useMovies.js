
import { searchMovies } from '../services/movies.js'
import { useState, useRef, useMemo ,useCallback} from 'react'
export function useMovies({ sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef('')


  const getMovies = useCallback(async ({ query }) => {
      console.log('Buscando peliculas')
      
    if (query === previousSearch.current) return

    try {
      setLoading(true)
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
      previousSearch.current = query 
    } catch (e) {
      console.log('Error en la peticion', e)
    } finally {
      setLoading(false)
    }

  }
  ,[])
  const sortedMovies = useMemo(() => {
    console.log('Sorting movies')
    sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies

  }, [sort, movies])
  return { movies: sortedMovies, getMovies, loading }

}