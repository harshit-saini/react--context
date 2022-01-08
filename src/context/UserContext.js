import React, { useState, createContext } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState("harshit");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
