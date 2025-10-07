import React, { useContext } from 'react'
import { ContactListContext } from '../../Context/ContactListContext'
import './MessageFormStyles.css'
import { IoAddSharp } from "react-icons/io5";


const NewMessageForm = (props) => {
    console.log(useContext(ContactListContext))
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(
            message_value
        )
    }

    return (
        <form onSubmit={handleSubmit} className='message-form'>
            <textarea id='mensaje' name='mensaje' placeholder='Escribe tu mensaje aquí' className='message-form-text-input'  />
            <button><img src="https://us.123rf.com/450wm/makc76/makc761610/makc76161000037/65182880-avi%C3%B3n-de-papel-de-origami-sobre-fondo-azul-icono-de-avi%C3%B3n-de-papel.jpg?ver=6" className='message-form__img'></img></button>
        </form>

    )
}

export default NewMessageForm