import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts.js'
export function useCatFact (){
  const [fact, setFact] = useState()
  const factRandom=()=>{
    getRandomFact().then(setFact)
  }
  useEffect(factRandom,[])
  return {fact, factRandom}

}