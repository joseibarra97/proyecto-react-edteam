import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"

// El Hook useParams nos devuelve los parametros que existen en la URL

const CriptoPage = () => {

    const params = useParams()

    const cripto = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)

    return (
        <div className="cripto-page-container">
            {
                // Aqui se esta validando que solo se hará la impresion der contenito cuando exista cripto
                cripto && (
                    <div className="info">
                        <div className="main-info">
                            <span>Ranking {cripto.rank}</span>
                            <h1>{cripto.name}</h1>
                            <span className="symbol">{cripto.symbol}</span>
                        </div>
                        <div className="details">
                            <ul>
                                <li className="detail">
                                    <span className="label">Precio: </span>
                                    <span>{parseFloat(cripto.priceUsd).toFixed(3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label">MaxSupply: </span>
                                    <span>{parseFloat(cripto.maxSupply).toFixed(3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label">Market Cap (USD): </span>
                                    <span>{parseFloat(cripto.marketCapUsd).toFixed(3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label">Volumen (USD - 24 Hrs.): </span>
                                    <span>{parseFloat(cripto.volumeUsd24Hr).toFixed(3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label">Variacion (24 Hrs.): </span>
                                    <span>{parseFloat(cripto.changePercent24Hr).toFixed(3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label">Vwap 24 Hrs.: </span>
                                    <span>{parseFloat(cripto.vwap24Hr).toFixed(3)}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
            <div className="history">
                {
                    // Aqui se esta validando que solo se hará la impresion der contenito cuando exista history
                    history && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.reverse().map(({date, priceUsd, time}) => (
                                    <tr key={time}>
                                        <td className="label">{new Date(date).toDateString()}</td>
                                        <td className="price">{parseFloat(priceUsd).toFixed(3)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    )
}

export default CriptoPage
