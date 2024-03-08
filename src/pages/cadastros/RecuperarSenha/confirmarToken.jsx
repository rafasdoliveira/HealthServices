import Input from '../../../components/form/input/Input'
import Button from '../../../components/button/Button'
// Images
import LogoHealth from '../../../assets/images/logos/cruz.svg'
import Lock from '../../../assets/images/icons/login-icons/lock-solid.svg'
// Styles
import './confirmarToken.css'

const confirmarSenha = () => {
  return (
    <div className='confirmarToken'>
      <div className="containerConfirmarToken">
        <img className="logoHealth" srcSet={LogoHealth} alt=""/>
        <span className="span_text">Enviamos um código para o seu e-mail</span>
        <form className='form_container'>
          <Input srcSet="/image/icons/user-regular.svg" type="text" name="token" id="token" placeholder="Informe o código recebido" />
          <div className="button_container">
            <div className="button">
              <Button name="confirmarToken" id="confirmarToken" to="/novasenha" text="Confirmar código"/> 
            </div>
          </div>
          <img className="logoIcc" srcSet="/image/LogoIcc.svg" alt=""></img>
        </form>
      </div>
    </div>
  )
}

export default confirmarSenha
