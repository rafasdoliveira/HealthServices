import { Link } from "react-router-dom"
import './cardmenu.css'

const CardMenu = ({to, srcSet, alt, text}) => {
  return (    
        <div className="card">
            <Link to={to} className="to_card">
                <span>
                    <img srcSet={srcSet} alt={alt}/>
                </span>
                <span className="card_text">{text}</span>  
            </Link>
        </div>
  )
}

export default CardMenu
