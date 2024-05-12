import React from 'react'
import { useAuthContext } from "../../context/AuthContext";
import ToggleButton from './ToggleButton';
const Profile = () => {
    const { authUser } = useAuthContext();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={authUser.profilePic} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{authUser.fullName}</h2>
    <p>Do you want to change your status?</p>
    <div className="card-actions">
    <ToggleButton/>
    </div>
  </div>
</div>
  )
}

export default Profile
