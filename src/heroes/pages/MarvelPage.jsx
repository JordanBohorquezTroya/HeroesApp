import { HeroesList } from "../components/HeroesList"


export const MarvelPage = () => {
  const publisher = "Marvel Comics"
  return (
    <>
    
    <h1>MarvelPage</h1>
    <HeroesList publisher={publisher}/>
    </>
  )
}
