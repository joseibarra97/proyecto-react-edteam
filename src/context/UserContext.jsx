import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

// createContext automaticmanete crea un componente que es el Provider
// Todos los componentes reciben por defecto una prop que se llama children, cuando accedemos a esta prop le estamos indicando que accederemos a todos los hijos del componente

const UserContextProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState({})

    useEffect(() => {
        setUsuario({
            name: "Jose Ibarra",
            registered: "20/06/2023"
        })
    }, [])

    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }