import { heroes } from "../data/heroes"


export const getByHeroesName = (name = '') =>{
    name = name.toLocaleLowerCase().trim()

    if(name.length === 0) return []

    return heroes.filter(
        (value) =>
            value.superhero.toLocaleLowerCase().trim().includes(name)
        
    )

}