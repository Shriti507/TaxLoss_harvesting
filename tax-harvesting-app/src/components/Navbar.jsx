import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <div className="green-dot"></div> HarvestIQ
      </div>

      <button className="theme-btn" onClick={toggle}>
        {theme === "light" ? "🌙 Dark" : "☀ Light"}
      </button>
    </nav>
  );
};

export default Navbar;