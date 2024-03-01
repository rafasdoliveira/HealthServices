import Input from '../../../components/form/input/Input'
import Button from '../../../components/button/Button'
import Footer from '../../../components/footer/Footer'
import './cadastroUsuario.css'

const CadastroUsuario = () => {
    return(
        <div className='cadastroUsuario'>
            <div className="containerCadastro">
                <span  className='text'>Registre-se</span>
                <img className="logoHealth" srcSet="/image/cruz.svg" alt=""/>
                <form className='form_container'>
                    <Input srcSet="/image/icons/user-regular.svg" type="text" name="nome" id="nome" placeholder="Digite seu nome"/>
                    <Input srcSet="/image/icons/envelope-regular.svg" type="email" name="password" id="password" placeholder="Digite seu e-mail"/>
                    <Input srcSet="/image/icons/lock-solid.svg" type="email" name="password" id="password" placeholder="Senha"/>
                    <Input srcSet="/image/icons/lock-solid.svg" type="email" name="password" id="password" placeholder="Confirme sua senha"/>
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