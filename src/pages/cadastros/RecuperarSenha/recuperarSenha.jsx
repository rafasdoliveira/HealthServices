// Component
import Input from '../../../components/form/input/Input'
import Button from '../../../components/button/Button'
import Footer from '../../../components/footer/Footer'
// Images
import LogoHealth from '../../../assets/images/logos/cruz.svg'
import Mail from '../../../assets/images/icons/login-icons/envelope-regular.svg'
// Styles
import './recuperarSenha.css'

const recuperarSenha = () => {
  return (
    <div className='recuperarSenha'>
      <div className="containerRecuperarSenha">
        <img className="logoHealth" srcSet={LogoHealth} alt=""/>
        <span className="span_text">Esqueceu sua senha?</span>
        <form className='form_containerRecuperarSenha'>
          <Input srcSet={Mail} type="email" name="email" id="email" placeholder="Digite seu e-mail" />
          <div className="button_container">
            <div className="button">
              <Button name="recuperarSenha" id="recuperarSenha" to="/confirmartoken" text="Recuperar Senha"/> 
            </div>
          </div>
          <img className="logoIcc" srcSet="/image/LogoIcc.svg" alt=""></img>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default recuperarSenha
