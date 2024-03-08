//Hooks
import { useState } from 'react';
//Images
// ../../../assets/images/icons/menu-icons/menu.svg
import MenuSvg from '../../assets/images/icons/menu-icons/menu.svg'
import GestaoUsuarioSvg from '../../assets/images/icons/menu-icons/gestaousuario.svg'
import GestaoPerfilSvg from '../../assets/images/icons/menu-icons/bx_bxs-user-check.svg'
import LoteSvg from '../../assets/images/icons/menu-icons/bx_bxs-box.svg'
import RecepcaoSvg from '../../assets/images/icons/menu-icons/fa-solid_hospital-user.svg'
import RecebimentoSvg from '../../assets/images/icons/menu-icons/ri_folder-received-fill.svg'
import DashSvg from '../../assets/images/icons/menu-icons/ic_round-dashboard.svg'
import DashLaboratorioSvg from '../../assets/images/icons/menu-icons/mdi_desktop-mac-dashboard.svg'
import RequisicaoSvg from '../../assets/images/icons/menu-icons/ant-design_file-text-filled.svg'
import EntregaRequisicaoSvg from '../../assets/images/icons/menu-icons/mdi_truck-delivery.svg'
import CadastroLaboratorioSvg from '../../assets/images/icons/menu-icons/medical-icon_registration.svg'
import CadastroNacionalidadeSvg from '../../assets/images/icons/menu-icons/fa-solid_globe.svg'
import NaoConformidadeSvg from '../../assets/images/icons/menu-icons/fa-solid_house-damage.svg'
import MaterialSvg from '../../assets/images/icons/menu-icons/clarity_blocks-group-solid.svg'
import MaterialExameSvg from '../../assets/images/icons/menu-icons/fontisto_test-tube-alt.svg'
import SairSvg from '../../assets/images/icons/menu-icons/whh_exit.svg'

const constSidebarMenu = () => {
    
    const [sidebar] = useState([
        {id: 1,  to: null, srcSet:  MenuSvg, alt:"menuIcon", text: "Menu principal"},
        {id: 2,  to: "/", srcSet:  GestaoUsuarioSvg, alt:"gestaoUsuarioIcon", text: "Gestão de usuários"},
        {id: 3,  to: "/", srcSet:  GestaoPerfilSvg, alt:"gestaoPerfil", text: "Gestão de perfis"},
        {id: 4,  to: "/", srcSet:  LoteSvg, alt:"gestaoPerfil", text: "Lotes"},
        {id: 5,  to: "/", srcSet:  RecepcaoSvg, alt:"gestaoPerfil", text: "Recepção"},
        {id: 6,  to: "/", srcSet:  RecebimentoSvg, alt:"gestaoPerfil", text: "Recebimento"},
        {id: 7,  to: "/", srcSet:  DashSvg, alt:"gestaoPerfil", text: "Dash"},
        {id: 8,  to: "/", srcSet:  DashLaboratorioSvg, alt:"gestaoPerfil", text: "Dash Laboratório"},
        {id: 9,  to: "/", srcSet:  RequisicaoSvg, alt:"gestaoPerfil", text: "Requisições"},
        {id: 10, to: "/", srcSet: EntregaRequisicaoSvg, alt:"gestaoPerfil", text: "Entrega de requisições"},
        {id: 11, to: "/", srcSet: CadastroLaboratorioSvg, alt:"gestaoPerfil", text: "Cadastro de laboratórios"},
        {id: 12, to: "/", srcSet: CadastroNacionalidadeSvg, alt:"gestaoPerfil", text: "Cadastro de nacionalidades"},
        {id: 13, to: "/", srcSet: NaoConformidadeSvg, alt:"gestaoPerfil", text: "Tipos de não conformidade"},
        {id: 14, to: "/", srcSet: MaterialSvg, alt:"gestaoPerfil", text: "Materiais"},
        {id: 15, to: "/", srcSet: MaterialExameSvg, alt:"gestaoPerfil", text: "Materiais de exames"},
        {id: 16, to: "/", srcSet: SairSvg, alt:"gestaoPerfil", text: "Sair"},
      ])
   return sidebar
}

export default constSidebarMenu
