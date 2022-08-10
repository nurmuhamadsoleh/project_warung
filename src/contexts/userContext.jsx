import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  //global state
  const [user, setUser] = useState({
    email: "nursoleh@gmail.com",
    id: 1,
  });
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserContextProvider;
