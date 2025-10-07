import React, { useContext, useEffect, useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import ContactList from '../../Components/ContactList/ContactList'
import './messageScreen.css'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import ContactListHeader from '../../Components/ContactListHeader/ContactListHeader'
import SideBar from '../../Components/SideBar/SideBar'
import MessageHeader from '../../Components/MessageHeader/MessageHeader'


function MessageScreen() {


    const { isContactDetailLoading, contactDetailed, onCreateNewMessage } = useContext(ContactDetailContext)


    return (
        <div className='message-screen'>
            <SideBar />
            <div className='message-screen__contact-list-container'>
                <ContactListHeader />
                <ContactList />
            </div>

            <div className='message-screen__messages-container'>
                <MessageHeader
                    author={contactDetailed?.name}
                    avatar={contactDetailed?.profile_img}
                />
                {
                    isContactDetailLoading
                        ? <span>Cargando...</span>
                        : (
                            contactDetailed
                                ?
                                <MessagesList
                                    messages={contactDetailed.messages}
                                />
                                : <span>Contacto no encontrado</span>
                        )
                }

                <div className='messages-form-container'>
                    <NewMessageForm
                        onCreateNewMessage={onCreateNewMessage}
                    />
                </div>
            </div>
        </div>
    )
}

export default MessageScreen
