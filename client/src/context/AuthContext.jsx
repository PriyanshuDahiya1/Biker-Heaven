// context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null if not logged in

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  useEffect(() => {
    // Optional: Load user from localStorage or API
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;