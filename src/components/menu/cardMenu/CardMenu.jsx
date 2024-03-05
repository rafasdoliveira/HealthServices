//Components
import constCardMenu from "../../../constants/CardMenu/constCardMenu"
//Route
import { Link } from "react-router-dom"
//Estilos
import './cardmenu.css'

const CardMenu = () => {

    const cards = constCardMenu()
  
    return (    
        <>
            {cards.map((card) => (
                <div key={card.id}>
                    <Link className="card" to={card.to}>
                        <span>
                            <img src={card.srcSet} alt={card.alt}/>
                        </span>
                        <span className="card_text">{card.text}</span>  
                    </Link>
                </div>
            ))}
        </>
  )
}

export default CardMenu
