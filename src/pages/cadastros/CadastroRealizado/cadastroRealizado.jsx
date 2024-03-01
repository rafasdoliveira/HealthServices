import { Link } from 'react-router-dom'
import './cadastroRealizado.css'

const cadastroRealizado = () => {
  return (
    <div className='cadastroRealizado'>
        <img className="sucessoImg" srcSet="/image/sucessoCadastro.svg" alt="" />
        <div className="textos">
            <h2>Seu cadastro foi realizado com sucesso!</h2>
            <p>Acesse seu e-mail e confirme seus dados.</p>
        </div>
        <div className="home__button">
            <button name="home" id="home">
                <Link to="/" className="registrar">Voltar para página de login</Link>
            </button>
        </div>    
    </div>
  )
}

export default cadastroRealizado
