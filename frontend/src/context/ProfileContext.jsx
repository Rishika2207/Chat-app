// ProfileContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const ProfileContext = createContext();

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <ProfileContext.Provider value={{ clicked, setClicked }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the ProfileContext
export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfileContext must be used within a ProfileProvider');
  }
  return context;
};
