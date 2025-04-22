import {Movies} from './components/Movies.jsx'
import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { useQuery } from './hooks/useQuery.js'
function App() {
  
  const{movies,getMovies ,loading} = useMovies()
  
  const{error,handleSubmit,handleChange}=useQuery({getMovies})
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' placeholder='pelis' />
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
