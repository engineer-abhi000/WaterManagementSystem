import {
  createContext,
  useContext
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);