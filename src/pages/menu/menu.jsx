// Components
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/Footer';
import CardMenu from '../../components/menu/cardMenu/CardMenu';
import SidebarMenu from '../../components/menu/sidebarMenu/SidebarMenu';
// Styles
import './menu.css';

const Menu = () => {
  return (
    <>
    <div className="header">
      <Header/>
    </div>
    <div className='menu'> 
      <div className="containerMenu">
        <nav className="sidebarMenu">
          <SidebarMenu id="menuPrincipal" to="/menu" srcSet="/image/icons/menu-icons/menu.svg" alt="menu" text="Menu principal" />
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/gestaousuario.svg" alt="menu" text="Gestão de usuários" />
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/bx_bxs-user-check.svg" alt="menu" text="Gestão de perfis" />
          <div className="line">
            <div className="menu_line"></div>
          </div>
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/bx_bxs-box.svg" alt="menu" text="Lotes" />
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/fa-solid_hospital-user.svg" alt="menu" text="Recepção" />
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/ri_folder-received-fill.svg" alt="menu" text="Recebimento" />
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/ic_round-dashboard.svg" alt="menu" text="Dash" />
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/mdi_desktop-mac-dashboard.svg" alt="menu" text="Dash Laboratório" />
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/ant-design_file-text-filled.svg" alt="menu" text="Requisições" />
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/mdi_truck-delivery.svg" alt="menu" text="Entrega de requisições"/>
          <div className="line">
            <div className="menu_line"></div>
          </div>
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/medical-icon_registration.svg" alt="menu" text="Cadastro de laboratórios"/>
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/fa-solid_globe.svg" alt="menu" text="Cadastro de nacionalidades"/>
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/fa-solid_house-damage.svg" alt="menu" text="Tipos de não conformidade"/>
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/clarity_blocks-group-solid.svg" alt="menu" text="Materiais"/>
          <SidebarMenu id="li" to="/menu" srcSet="/image/icons/menu-icons/fontisto_test-tube-alt.svg" alt="menu" text="Materiais de exames"/>
          <SidebarMenu id="menuPrincipal" to="/menu" srcSet="/image/icons/menu-icons/whh_exit.svg" alt="menu" text="Sair" />
        </nav>
        <main>
          <div className="cards">
            <CardMenu to="/usuarios" srcSet="/image/icons/main-icons/fa-solid_users.svg" alt="usuarios" text="Gestão de Usuários"/>
            <CardMenu to="/usuarios" srcSet="/image/icons/main-icons/fa-solid_users.svg" alt="usuarios" text="Gestão de Usuários"/>
            <CardMenu to="/usuarios" srcSet="/image/icons/main-icons/fa-solid_users.svg" alt="usuarios" text="Gestão de Usuários"/>
            <CardMenu to="/usuarios" srcSet="/image/icons/main-icons/fa-solid_users.svg" alt="usuarios" text="Gestão de Usuários"/>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default Menu;
