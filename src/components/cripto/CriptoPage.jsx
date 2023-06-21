import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistory from "./info/CriptoHistorial"

// El Hook useParams nos devuelve los parametros que existen en la URL

const CriptoPage = () => {

    const params = useParams()

    const cripto = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)

    return (
        <div className="cripto-page-container">
            {
                // Aqui se esta validando que solo se hará la impresion der contenito cuando exista cripto
                cripto && <CriptoInfo cripto={cripto}/>
            }
            {
                // Aqui se esta validando que solo se hará la impresion der contenito cuando exista history
                history && <CriptoHistory history={history}/>
            }
        </div>
    )
}

export default CriptoPage
