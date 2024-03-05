import { Link } from 'react-router-dom'
// Components
import Input from './components/form/input/Input'
import Footer from './components/footer/Footer'
import Button from './components/button/Button'
// Styles
import './App.css'
// Images
import LogoHealth from './assets/images/logos/cruz.svg'
import Mail from './assets/images/icons/login-icons/envelope-regular.svg'
import Lock from './assets/images/icons/login-icons/lock-solid.svg' 

function App() {
  return (
    <div className='App'>
      <div className="container">
        <img className="logoHealth" srcSet={LogoHealth} alt=""/>
        <span className="span_text">Entre com seu login e senha para acessar os serviços</span>
        <form className='form_container'>
          <Input srcSet={Mail} type="email" name="email" id="email" placeholder="Digite seu e-mail" />
          <Input srcSet={Lock} type="email" name="password" id="password" placeholder="Digite sua senha"/>
          <div className="button_container">
            <div className="button">
              <Button name="login" id="login" to="/menu" text="Login"/>
            </div>
            <div className="button">
              <Button name="registrar" id="registrar" to="/cadastrousuario" text="Registrar"/> 
            </div>
          </div>
          <Link to="/recuperarsenha" className="span_text">Esqueci minha senha</Link>
          <img className="logoIcc" srcSet="/image/LogoIcc.svg" alt=""></img>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default App
