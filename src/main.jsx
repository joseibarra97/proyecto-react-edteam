import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './components/404.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Home from './Home.jsx'
import CriptoPage from './components/cripto/CriptoPage.jsx'
import Perfil from './components/usuarios/Perfil.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import Login from './components/usuarios/Login.jsx'
// import Menu from './components/menu/Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
// Para que el router funcione tenemos que meter la App dentro de el

    <UserContextProvider>
        <BrowserRouter>

            {/* Para que el componente <Link></Link> funcione debemos de meter su componente padre, en este caso <Menu /> dentro del <BrowserRouter> */}

            {/* <Menu /> */}

            <Routes>
            {/* Para optimizar aun mas nuestra pagina, debemos hacer uso del componente <Outlet /> que colocamos en el archivo App.jsx esto nos permite crear un nuevo componente padre aqui el cual tiene el inicio como path='/' y de element={<App />} en ese archivo App.jsx se agrega el menu para evitar que este sea cargado siempre aqui */}

                <Route path='/' element={<App />}>
                    <Route path='perfil' element={<Perfil />}/>
                </Route>
                
                <Route path='/' element={<Home />}/>

                

                <Route path='/criptomonedas' element={<App />}>
                    <Route index element={<Cuadricula />}/>
                    <Route path=':id' element={<CriptoPage />} />
                </Route>
                <Route path='/login' element={<Login />}/>
                {/* El asterisco * se usa como comodin para indicar que cualquier otra ruta buscada en la pagina y que no exista será direccionada a la pagina que le asignemos en el elemento */}
                <Route path='*' element={<Pagina404 />}/>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
