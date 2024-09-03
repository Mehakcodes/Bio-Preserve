import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged, userId, setUserId}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;