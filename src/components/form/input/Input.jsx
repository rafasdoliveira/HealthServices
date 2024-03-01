import './input.css'

export default function Input({srcSet, type, name, id, placeholder}) {

    return(
        <div className="inputComponent">
            <img srcSet={srcSet} alt=""/>
            <input className='input' type={type} name={name} id={id} placeholder={placeholder} required autoComplete='true'/>
        </div>
    )
}