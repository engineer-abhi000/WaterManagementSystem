import { Bell, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../auth/AuthContext";

const Header = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.body.dataset.theme = dark ? "" : "dark";
    setDark(!dark);
  };

  const { logout } = useAuth();

  return (
    <motion.header
      className="top-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Smart Water Management System</h2>

      <div className="header-actions">
        <Bell size={20} />
        <button className="icon-btn" onClick={toggleTheme}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="icon-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
