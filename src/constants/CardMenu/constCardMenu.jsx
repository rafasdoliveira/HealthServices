//Hooks
import { useState } from "react"
//Images
import UsersSvg from '../../assets/images/icons/main-icons/fa-solid_users.svg'

const constCardMenu = () => {
  const[cards] = useState([
    {id: 1, to:'/usuarios', srcSet: UsersSvg, alt: 'usuarioSvg', text: 'Gestão de Usuários'},
    {id: 2, to:'/usuarios', srcSet: UsersSvg, alt: 'usuarioSvg', text: 'Gestão de Usuários'},
    {id: 3, to:'/usuarios', srcSet: UsersSvg, alt: 'usuarioSvg', text: 'Gestão de Usuários'},
    {id: 4, to:'/usuarios', srcSet: UsersSvg, alt: 'usuarioSvg', text: 'Gestão de Usuários'},
    
  ])
  return cards
}

export default constCardMenu
