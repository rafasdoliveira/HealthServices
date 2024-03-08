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
// Axios
import axios from 'axios'
import { useState } from 'react'

const CadastroUsuario = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function createUser() {

        axios.post('http://localhost:3000/users',{
            nome: nome,
            email: email,
            senha: senha,
        },
    )
        .then(function (response) {
            alert('Cadastro realizado com sucesso!')
            console.log(response)
        })
        .catch(function (error) {
            alert('Algo está errado, contate o administrador!')
            console.log(error)
        })
    }

    return(
        <div className='cadastroUsuario'>
            <div className="containerCadastro">
                <span  className='textCadastro'>Registre-se</span>
                <img className="logoHealth" srcSet={LogoHealth} alt=""/>
                <form className='form_container'>
                    <Input srcSet={User} type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={(e)=> setNome(e.target.value)}/>
                    <Input srcSet={Mail} type="email" name="email" id="email" placeholder="Digite seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
                    <Input srcSet={Lock} type="password" name="password" id="password" placeholder="Senha"onChange={(e)=> setSenha(e.target.value)}/>
                    <div className="button">
                        <Button name="registrar" id="registrar" to="/cadastrorealizado" text="Registrar" onClick={createUser}/>
                    </div>
                    <img srcSet="/image/LogoIcc.svg" alt=""></img>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default CadastroUsuario