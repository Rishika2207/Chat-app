import React, { useState } from 'react'
import { useAuthContext } from "../../context/AuthContext";
export async function updateStatus(userId, status) {
  try {
      const response = await fetch(`/api/users/${userId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status }) 
      });
      
      if (!response.ok) {
          throw new Error('Failed to update user status');
      }

      console.log('User status updated successfully');
  } catch (error) {
      console.error('Error updating user status:', error.message);
  }
}

const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(false)
    const { authUser } = useAuthContext();
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
    const status = isChecked ? 'busy' : 'available';
     updateStatus(authUser._id, status);
    return (
      <>
        <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
          
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <span
            className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
              isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
            }`}
          >
            <span
              className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                isChecked ? 'translate-x-[28px]' : ''
              }`}
            ></span>
            
          </span>
          <span className='label flex items-center text-sm font-medium text-black'>
            Busy
          </span>
              
        </label>
      </>
    )
  }


export default ToggleButton