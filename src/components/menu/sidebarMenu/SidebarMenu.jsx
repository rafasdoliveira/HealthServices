import { Link } from "react-router-dom"
import './sidebarmenu.css'

const SidebarMenu = ({id, to, srcSet, alt, classText, text}) => {
  return (  
      <ul id={id}>
        <li>
          <Link to={to} className="to_menu">
            <span><img srcSet={srcSet} alt={alt}/></span>
            <span className="menu_text">{text}</span>
          </Link>
        </li>
      </ul>
  )
}

export default SidebarMenu
