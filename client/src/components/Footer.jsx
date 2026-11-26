import { MapPin, Phone, Clock3, ArrowUp, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img src={logo} alt="Logo NAILAH JAYA" />
              <span>NAILAH JAYA</span>
            </a>

            <p>
              Layanan kursus mengemudi untuk membantu Anda
              mengembangkan keterampilan dan membangun sikap
              berkendara yang bertanggung jawab.
            </p>

            <a
              href="https://wa.me/628153399639"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={17} />
              Hubungi Kami
              <span>→</span>
            </a>
          </div>

          <div className="footer-links">
            <h3>Navigasi</h3>
            <a href="#home">Beranda</a>
            <a href="#about">Tentang Kami</a>
            <a href="#packages">Paket Kursus</a>
            <a href="#location">Lokasi</a>
            <a href="#contact">Kontak</a>
          </div>

          <div className="footer-contact">
            <h3>Informasi Kontak</h3>

            <div className="footer-contact-item">
              <Phone size={17} />
              <div>
                <a href="https://wa.me/628153399639">
                  +62 815-3399-639
                </a>
                <a href="https://wa.me/6282365648717">
                  +62 823-6564-8717
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={17} />
              <span>Medan, Sumatera Utara</span>
            </div>

            <div className="footer-contact-item">
              <Clock3 size={17} />
              <span>Senin - Sabtu, 08.00 - 17.00 WIB</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} NAILAH JAYA.
            Seluruh hak cipta dilindungi.
          </p>

          <a href="#home" className="footer-back-top">
            Kembali ke atas
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
