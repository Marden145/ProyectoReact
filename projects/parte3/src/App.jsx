import {  useEffect ,useState} from 'react'

function App() {
 const[enable, setEnable] = useState(false)
 const [position, setPosition] = useState({x:0,y:0})

 useEffect(() => {
const handleMove=(event)=>{
  const{clientX, clientY} = event
  setPosition({x:clientX,y:clientY})
}
if(enable){
  window.addEventListener('mousemove', handleMove)
}
return () => {
  window.removeEventListener('mousemove', handleMove)
}

 },[enable])

 useEffect(() => {
  document.body.classList.toggle('no-cursor', enable)
  return () => {
    document.body.classList.remove('no-cursor')
  }
 },[enable])
  return (
    <main>
    <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(226, 15, 195, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`,
        animation: 'bloom 2s infinite ease-in-out',
        
      
      }}
      
      /> 
    <button onClick={()=>setEnable(!enable)}>
      {enable ? 'Desactivar': 'Activar'} seguir puntero
    </button>
     
    </main>
    
  )
}

export default App
