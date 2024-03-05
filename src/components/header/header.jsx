//Routes
import { Link } from 'react-router-dom'
//Estilo
import './header.css'
//Image
import LogoHealth from '../../assets/images/logos/cruz.svg'


const header = () => {
  return (
    <header>
      <Link to="/">
       <img className="logoHealthHeader" srcSet= {LogoHealth} alt=""/>    
      </Link>
    </header>
  )
}

export default header
