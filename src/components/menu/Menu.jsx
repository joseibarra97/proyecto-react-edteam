import { NavLink } from "react-router-dom"
import "./Menu.css"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"

// En React en lugar de utilizar la etiqueta <a> para enlaces, utilizamos el componente <Link></Link>, para este componente en lugar de utilizar href, utilizamos una prop que es to=""

// Para menus principales debemos utilizar <NavLink>

const Menu = () => {

    const usuario = useContext(UserContext)

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de { usuario.name }</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu
