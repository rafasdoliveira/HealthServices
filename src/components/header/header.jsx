import { Link } from 'react-router-dom'

import './header.css'

const header = () => {
  return (
    <header>
      <Link to="/">
       <img className="logoHealthHeader" srcSet="/image/cruz.svg" alt=""/>    
      </Link>
    </header>
  )
}

export default header
