import { Navigate, Outlet } from "react-router-dom"
import Menu from "./menu/Menu"
import "./App.css"

// En este componente App colocamos el Menu y el componente Outlet indicando que toda pagina va a tener un Menu y Outlet le va a decir al grupo de rutas que tenemos en main.jsx que deberan usar esta estructura la cual les indica que siempre van a tener un menu y depues van a reemplazar el Outlet por el componente que estan referenciando en cada una de sus rutas

const App = () => {

    if (!localStorage.getItem("tokenCriptoInfo")) return <Navigate to="/login"/>

    return (
        <div className="app-container">
            <Menu />
            <Outlet />
        </div>
    )
}

export default App
