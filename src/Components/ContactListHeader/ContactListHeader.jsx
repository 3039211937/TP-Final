import React from 'react'
import './ContactListHeader.css'
import { RiChatNewFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { PiMagnifyingGlassLight } from "react-icons/pi";

export const ContactListHeader = () => {
    return (
        <div className='header'>
            <div className='header__upper'>
                <h2 className='header__title'>Blablapp</h2>
                <div className='header__side'>
                    <button className='header__icon'><RiChatNewFill /></button>
                    <button className='header__icon'><SlOptionsVertical /></button>
                </div>
            </div>
            <form className='header__form'>
                <textarea id='mensaje' name='seach' placeholder='Buscar un chat o iniciar uno nuevo' className='header__text-input' />
                <button className='header__text-input-icon'><PiMagnifyingGlassLight/></button>
            </form>
        </div>
    )
}

export default ContactListHeader
