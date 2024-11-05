import { HeroesList } from "../components/HeroesList"


export const DcPage = () => {
  const publisher = "DC Comics"
  return (
    <>
    <h1>DcPage</h1>
    <HeroesList publisher ={publisher }/>
    </>
  )
}
