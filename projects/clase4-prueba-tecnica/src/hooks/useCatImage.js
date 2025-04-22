import { useEffect, useState } from 'react'
import { getImage } from '../services/image.js'
export function useCatImage({fact}){
  const [catImage, setCatImage] = useState();
useEffect(() => {
  if (!fact) return
  getImage(fact).then(Image => setCatImage(Image))

}, [fact])
return {catImage}
}