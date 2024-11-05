import { heroes } from "../data/heroes"

export const getByHeroesPublisher = ( publisher) => {
  
    const validatePyublisher = ["DC Comics", "Marvel Comics"]
    if(!validatePyublisher.includes(publisher)){
        throw new Error("El publisher es invalido")
    }
    return  heroes.filter(heroe => heroe.publisher === publisher)
    
}