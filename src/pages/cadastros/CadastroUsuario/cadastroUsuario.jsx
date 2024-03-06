// Component
import Input from '../../../components/form/input/Input'
import Button from '../../../components/button/Button'
import Footer from '../../../components/footer/Footer'
// Style
import './cadastroUsuario.css'
// Images
import LogoHealth from '../../../assets/images/logos/cruz.svg'
import User from '../../../assets/images/icons/login-icons/user-regular.svg'
import Mail from '../../../assets/images/icons/login-icons/envelope-regular.svg'
import Lock from '../../../assets/images/icons/login-icons/lock-solid.svg'

const CadastroUsuario = () => {
    return(
        <div className='cadastroUsuario'>
            <div className="containerCadastro">
                <span  className='textCadastro'>Registre-se</span>
                <img className="logoHealth" srcSet={LogoHealth} alt=""/>
                <form className='form_container'>
                    <Input srcSet={User} type="text" name="nome" id="nome" placeholder="Digite seu nome"/>
                    <Input srcSet={Mail} type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
                    <Input srcSet={Lock} type="password" name="password" id="password" placeholder="Senha"/>
                    <Input srcSet={Lock} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme sua senha"/>
                    <div className="button">
                        <Button name="registrar" id="registrar" to="/cadastrorealizado" text="Registrar"/>
                    </div>
                    <img srcSet="/image/LogoIcc.svg" alt=""></img>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default CadastroUsuario