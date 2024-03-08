//Components
import constSidebarMenu from "../../../constants/SidebarMenu/constSidebarMenu" 
//Route
import { Link } from "react-router-dom"
//Estilo
import './sidebarmenu.css'
//Hooks

const SidebarMenu = ( {fecharSidebar} ) => {
  const sidebar = constSidebarMenu()

  

  return (  
      <ul>
        {sidebar.map((card) => (
          <li key={card.id} className={card.id === 1 || card.id === 16 ? "principal" : "liSidebar"}  onClick={() => {if (card.id === 1) fecharSidebar();}}>
            <Link to={card.to} className="link_menu">
              <span><img src={card.srcSet} alt={card.alt}/></span>
              <span className="menu_text">{card.text}</span>
            </Link>
          </li>
        ))}
      </ul>
  )
}

export default SidebarMenu
