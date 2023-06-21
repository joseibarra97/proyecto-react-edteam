import usePetition from "../hooks/usePetition"
import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"


function Cuadricula() {

  const criptos = usePetition(`assets`)

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
              id={id}
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default Cuadricula
