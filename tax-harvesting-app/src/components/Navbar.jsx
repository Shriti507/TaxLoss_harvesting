import { useEffect, useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <div className="green-dot"></div> HarvestIQ
      </div>

      <button className="theme-btn" onClick={toggle}>
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;