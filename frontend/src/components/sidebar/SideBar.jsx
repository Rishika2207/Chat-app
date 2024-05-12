import React, { useState } from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import { useProfileContext } from '../../context/ProfileContext'

const SideBar = () => {
  const { clicked, setClicked } = useProfileContext(); // Access the clicked state and setter function from the context

  const handleClick = () => {
    setClicked(prevClicked => !prevClicked);
  };
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col '>
      <button className="btn btn-outline" onClick={handleClick}>Your Profile</button>
        <br/>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default SideBar