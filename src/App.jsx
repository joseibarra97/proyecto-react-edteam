import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import Cripto from "./Cripto"

/*
  PETICIONES A UNA API DE TIPO GET

    * Lo que fetch() realiza es una peticion al link que le coloquemos
    * .then() recibe la respuesta y ejecuta una accion con esa respuesta, en este caso la convertira en una de tipo json
    * El segundo .then() recibe la data de la accion anterior y ejecuta otra funcion
    * Por ultimo .catch() se ejecutara en caso de que la peticion falle y nos mostrara la accion que le indiquemos, en este caso un console.error()

*/
function App() {
  
  // El useState() va almacenar la informacion que se encuentre en la data que nos regresa el .then() del fetch()

  // El array vacio en useState([]) es para evitar que nos marque un error ya que la informacion tardaría en llegar a la funcion de criptos.map()

  // La "const API_URL" importa el url de la API para poderlo cambiar desde el archivo .env.local en caso de ser necesario

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()
  

  // La libreria de axios nos sirve para sustituir fetch y cumple la misma funcion, la ventaja es axios realiza la conversion de la respuesta a json de manera automatica.

  // En cualquiera de los dos casos debemos de hacer un console.log primero para saber que es lo que data nos está devolviendo y cuandos ".data" tendremos que poner

  useEffect(() => {
    axios.get(`${API_URL}assets`)
    // fetch(`${API_URL}assets`)
      // .then((resp) => resp.json())
      .then((data) => {
        // console.log(data)
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La peticion falló")
      })
  }, [])

  // Este if lo colocamos para quitar el array vacio de useState([]) y dar una solucion mas optima al problema

  if (!criptos) return <span>Cargando...</span>

  return (

    // criptos.map() va a crear un nuevo array tomando la informacion que esta almacenada en useState y con la siguiente funcion la va a retornar a manera de texto tomando solo los parametros que le estamos indicando, en este caso "name" y "priceUsd".

    // Para que react pueda diferenciar entre cada <li></li> en caso de haber mas de una, necesitamos otorgarle un valor a la propiedad key={} para cada una

    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        { 
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto 
              key={id} 
              name={name} 
              priceUsd={priceUsd} 
              symbol={symbol} 
              changePercent24Hr={changePercent24Hr} 
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default App
