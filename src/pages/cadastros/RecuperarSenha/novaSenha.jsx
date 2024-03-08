// Component
import Input from '../../../components/form/input/Input'
import Button from '../../../components/button/Button'
import Footer from '../../../components/footer/Footer'
// Images
import LogoHealth from '../../../assets/images/logos/cruz.svg'
import Lock from '../../../assets/images/icons/login-icons/lock-solid.svg'
// Styles
import './novaSenha.css'

const confirmarSenha = () => {
  return (
    <div className='novaSenha'>
      <div className="containerNovaSenha">
        <img className="logoHealth" srcSet={LogoHealth} alt=""/>
        <span className="span_text">Crie uma nova senha</span>
        <form className='form_container'>
        <Input srcSet={Lock} type="email" name="password" id="password" placeholder="Defina uma senha"/>
        <Input srcSet={Lock} type="email" name="password" id="password" placeholder="Confirme sua senha"/>
          <div className="button_container">
            <div className="button">
              <Button name="recuperarSenha" id="recuperarSenha" to="/" text="Cadastrar"/> 
            </div>
          </div>
          <img className="logoIcc" srcSet="/image/LogoIcc.svg" alt=""></img>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default confirmarSenha
