export const getImage= async(fact)=>{
    const firtsWord=fact.split(' ')[0]
    const res= await fetch(`https://cataas.com/cat/says/${firtsWord}?size=50&color=red&json=true`)
    const data = await res.json()
    const {url} = data
    return url
}