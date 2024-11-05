import { heroes } from "../data/heroes"

export const getHeroById = (id) =>{
    return heroes.find((valu) => valu.id === id)
}