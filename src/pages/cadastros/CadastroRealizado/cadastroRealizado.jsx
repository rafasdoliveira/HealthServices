import { Link } from 'react-router-dom'
import './cadastroRealizado.css'

const cadastroRealizado = () => {
  return (
    <div className='cadastroRealizado'>
        <img class="sucessoImg" srcSet="/image/sucessoCadastro.svg" alt="" />
        <div class="textos">
            <h2>Seu cadastro foi realizado com sucesso!</h2>
            <p>Acesse seu e-mail e confirme seus dados.</p>
        </div>
        <div class="home__button">
            <button name="home" id="home">
                <Link to="/" class="registrar">Voltar para página de login</Link>
            </button>
        </div>    
    </div>
  )
}

export default cadastroRealizado
