import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "",
    name: "",
    avatar_url: "",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
}
