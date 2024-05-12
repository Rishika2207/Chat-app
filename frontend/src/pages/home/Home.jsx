import React, { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar';
import MessageContainer from '../../components/messages/MessageContainer';
import Profile from '../../components/sidebar/Profile';
import { useProfileContext } from '../../context/ProfileContext';

const Home = () => {
	const { clicked } = useProfileContext();
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 relative'>
			 <SideBar />
			<MessageContainer /> 
			 {clicked ? (
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <Profile/>
           </div>
            ) : null}
		</div>
		
	);
};
export default Home;