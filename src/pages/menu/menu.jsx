import { useState, useEffect, useRef } from 'react';
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
  const [abrirSidebar, setAbrirSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const alternarSidebar = () => {
    setAbrirSidebar(!abrirSidebar);
  };

  const fecharSidebar = () => {
    setAbrirSidebar(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setAbrirSidebar(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
      <div className="header">
        <Header />
        <div className='menusvg' onClick={alternarSidebar}>
          <img src={MenuSvg} alt="" />
        </div>
      </div>
      <div className='menu'>
        <div ref={sidebarRef} className={`${abrirSidebar ? 'sidebarOpen' : 'containerMenu'}`}>
          <nav className="sidebarMenu">
            <SidebarMenu fecharSidebar={fecharSidebar} />
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
