import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="Logo NAILAH JAYA" />
          <span>NAILAH JAYA</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Beranda</a>
          <a href="#advantages" onClick={closeMenu}>Keunggulan</a>
          <a href="#about" onClick={closeMenu}>Tentang Kami</a>
          <a href="#packages" onClick={closeMenu}>Paket Kursus</a>
          <a href="#location" onClick={closeMenu}>Lokasi</a>
          <a href="#contact" onClick={closeMenu}>Kontak</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
