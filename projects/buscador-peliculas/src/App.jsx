import {Movies} from './components/Movies.jsx'
import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { useQuery } from './hooks/useQuery.js'
import { useState } from 'react'
function App() {
  const [sort,setSort] = useState(false)
  const{movies,getMovies ,loading} = useMovies({sort})
  const{error,handleSubmit,handleChange}=useQuery({getMovies})
  const handleSort=()=>{
    setSort(!sort)
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' placeholder='pelis' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button  type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main>
          {
            loading ? <p>Cargando...</p>:<Movies movies={movies}/>
          }
        </main>
    </div>
  )
}

export default App
