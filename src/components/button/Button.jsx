// React Router
import React from 'react'
import { Link } from 'react-router-dom'   
// Styles
import './button.css'

export default function Button({name, id, to, text}) {
    return(
        <div className="buttonComponent">
            <Link to={to}>
                <button name={name} id={id}>{text}</button>
            </Link>
        </div>
    )
}
