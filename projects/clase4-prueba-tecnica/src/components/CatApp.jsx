import{useCatImage} from '../hooks/useCatImage.js'
import {useCatFact} from '../hooks/useCatFact.js'

export function CatApp(){
    const {fact, factRandom} = useCatFact()
    const {catImage} = useCatImage({fact})
    const handleClick = async () => {
        factRandom()
      }
    return(
        <>
        <h1>App de gatitos</h1>
        {catImage && <img src={catImage} alt="cat" />}
        <h2>Random fact</h2>
        {fact && <p>{fact}</p>}
        <button onClick={handleClick}>show an other fact cat</button>
        </>
    )
}