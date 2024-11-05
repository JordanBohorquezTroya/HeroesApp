//import { HeroeCard } from "../components";
//paquete de react router
import { useLocation, useNavigate } from "react-router";
//paquete de query
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";
import { getByHeroesName } from "../helpers/getByHeroesName";
import { HeroeCard } from "../components/HeroeCard";

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''}= queryString.parse(location.search)
  const heroes = useMemo(()=> getByHeroesName (q), [q])


  const showHero = (q.length === 0 );

  const showError = (q.length > 0) && heroes.length === 0

  
  const {searchText = '',onInputChange } = useForm({
    searchText: q
  })



  const onSearchSubmit = (event) =>{
    event.preventDefault()
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Search a hero"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <button className="btn btn-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary animate__animated animate__fadeIn " style={{display: showHero ? '' : 'none'}}>Search a Hero</div>
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError? '' : 'none'}}>There´s no results {q}</div>

          {
            heroes.map(value => (
              <HeroeCard key={value.id} {...value}/>
            ))
          }
        </div>
      </div>
    </>
  );
};
