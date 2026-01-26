import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("user"))
  // );
  

  const login = (username, password) => {
    // dummy auth
    if (username === "admin@gmail.com" && password === "123456") {
      const userData = { username };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
