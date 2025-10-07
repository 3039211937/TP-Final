
import React from 'react'
import ContactList from '../../Components/ContactList/ContactList'
import "./HomeScreen.css"
import ContactListHeader from '../../Components/ContactListHeader/ContactListHeader'
import SideBar from '../../Components/SideBar/SideBar'

const HomeScreen = () => {
  return (
    <div className='home-screen'>
        <div className='sidebar-container'>
        <SideBar/>
        </div>
        <div className='contact-list'>
            
            <ContactListHeader/>
            <ContactList/>
        </div>
        <div className='no-messages-container'>
            <span>Aún no has seleccionado ningun contacto.</span>
        </div>
    </div>
  )
}

export default HomeScreen