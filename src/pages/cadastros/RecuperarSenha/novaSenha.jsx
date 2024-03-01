import Input from '../../../components/form/input/Input'
import Button from '../../../components/button/Button'

import './confirmarToken.css'

const confirmarSenha = () => {
  return (
    <div className='recuperarSenha'>
      <div className="containerRecuperarSenha">
        <img className="logoHealth" srcSet="/image/cruz.svg" alt=""/>
        <span className="span_text">Enviamos um código para o seu e-mail</span>
        <form className='form_container'>
        <Input srcSet="/image/icons/lock-solid.svg" type="email" name="password" id="password" placeholder="Defina uma senha"/>
        <Input srcSet="/image/icons/lock-solid.svg" type="email" name="password" id="password" placeholder="Confirme sua senha"/>
          <div className="button_container">
            <div className="button">
              <Button name="recuperarSenha" id="recuperarSenha" to="/" text="Cadastrar"/> 
            </div>
          </div>
          <img className="logoIcc" srcSet="/image/LogoIcc.svg" alt=""></img>
        </form>
      </div>
    </div>
  )
}

export default confirmarSenha
