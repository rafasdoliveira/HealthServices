import { useState } from 'react';
// Components
import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import CardMenu from '../../components/menu/cardMenu/CardMenu';
import SidebarMenu from '../../components/menu/sidebarMenu/SidebarMenu';
// Styles
import './menu.css';
// Images
import MenuSvg from '../../assets/images/icons/menu-icons/menumobile.svg'

const Menu = () => {

  const [abrirSidebar, setAbrirSidebar] = useState(false)

  const alternarSidebar = () => {
    setAbrirSidebar(!abrirSidebar);
  };

  return (
    <>
      <div className="header">
        <Header />
        <div className='menusvg' onClick={alternarSidebar}>
          <img src={MenuSvg} alt="" />
        </div>
      </div>
      <div className='menu'>
        <div className={` ${abrirSidebar ? 'sidebarOpen' : 'containerMenu'}`}>
          <nav className="sidebarMenu">
            <SidebarMenu />
          </nav>
        </div>
          <main>
            <div className="cards">
              <CardMenu />
            </div>
          </main>
        <Footer />
      </div>
    </>
  );
};

export default Menu;
