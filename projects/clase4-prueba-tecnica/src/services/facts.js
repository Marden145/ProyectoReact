const CAT_ENDPOINT = 'https://catfact.ninja/fact'
export const getRandomFact = async () => {
    
   const res = await fetch(CAT_ENDPOINT)
    const data = await res.json()
    const { fact } = data
    return fact

}