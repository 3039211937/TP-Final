
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
            <h2 className='no-messages-container__title'>Blablapp</h2>
        </div>
    </div>
  )
}

export default HomeScreen