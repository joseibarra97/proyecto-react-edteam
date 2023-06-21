// Este es el Hook personalizado que importa la informacion de la URL dada para posteriormente imprimirla de acuerdo a la funcion de criptoPage

import axios from "axios"
import { useEffect, useState } from "react"

/*
  PETICIONES A UNA API DE TIPO GET

    * Lo que fetch() realiza es una peticion al link que le coloquemos
    * .then() recibe la respuesta y ejecuta una accion con esa respuesta, en este caso la convertira en una de tipo json
    * El segundo .then() recibe la data de la accion anterior y ejecuta otra funcion
    * Por ultimo .catch() se ejecutara en caso de que la peticion falle y nos mostrara la accion que le indiquemos, en este caso un console.error()

*/

const usePetition = (endpoint) => {

    // El useState() va almacenar la informacion que se encuentre en la data que nos regresa el .then() del fetch()

    // El array vacio en useState([]) es para evitar que nos marque un error ya que la informacion tardaría en llegar a la funcion de criptos.map()

    // La "const API_URL" importa el url de la API para poderlo cambiar desde el archivo .env.local en caso de ser necesario

    const API_URL = import.meta.env.VITE_API_URL

    const [data, setData] = useState()

    // La libreria de axios nos sirve para sustituir fetch y cumple la misma funcion, la ventaja es axios realiza la conversion de la respuesta a json de manera automatica.

    // En cualquiera de los dos casos debemos de hacer un console.log primero para saber que es lo que data nos está devolviendo y cuandos ".data" tendremos que poner

    useEffect(() => {
        axios.get(`${API_URL}${endpoint}`)
        // fetch(`${API_URL}assets`)
            // .then((resp) => resp.json())
        .then(data => {
            // console.log(data)
            setData(data.data.data)
        })
        .catch(e => console.error(e))
    }, [])

    return data
}

export default usePetition;
