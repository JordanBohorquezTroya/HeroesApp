import { useMemo } from "react"
import { getByHeroesPublisher } from "../helpers/getByHeroesPublisher"
import { HeroeCard } from "./"



export const HeroesList = ({publisher}) => {
    const heroes = useMemo(()=> getByHeroesPublisher(publisher), [publisher]) 
  return (
    
    <div className="row row-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( (value) => (
               <HeroeCard key={value.id} {...value}/>
            )
            )
        }
    </div>
    
  )
}
