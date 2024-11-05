import { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {
  const navigate = useNavigate()
  const {Login} = useContext(AuthContext)
  
  const onLogin =() =>{
    const lastPath = localStorage.getItem('pathname') || '/marvel'
    Login('Jordan Bohorquez')
    navigate(lastPath,{
      replace: true
    })

  }
  return (
    <div className="container mt-4">
      <h1>LoginPage</h1>
      <hr />
      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  )
}
