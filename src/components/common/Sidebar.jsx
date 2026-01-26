import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      className={`sidebar ${collapsed ? "collapsed" : ""}`}
      animate={{ width: collapsed ? 70 : 230 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="sidebar-header">
        {!collapsed && <span>💧 Smart Water</span>}
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/" end className="menu-item">
          <LayoutDashboard size={20} />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/reports" className="menu-item">
          <BarChart3 size={20} />
          {!collapsed && <span>Reports</span>}
        </NavLink>

        <NavLink to="/sustainability" className="menu-item">
          <Leaf size={20} />
          {!collapsed && <span>Sustainability</span>}
        </NavLink>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
