import { Info, Phone, Clock3, MapPin, MessageCircle } from "lucide-react";

function Kontak() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <div className="contact-label">
            <Phone size={15} />
            <span>HUBUNGI KAMI</span>
          </div>

          <h4>
            <span>Membantu Anda</span> Memulai Perjalanan
          </h4>

          <p>
            Kami siap memberikan informasi dan membantu kebutuhan
            kursus mengemudi Anda.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-box">
            <div className="contact-box-heading">
              <div className="contact-box-icon">
                <Info size={23} />
              </div>
              <h3>Informasi Kontak</h3>
            </div>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item-icon contact-phone-icon">
                  <Phone size={20} />
                </div>

                <div className="contact-item-content">
                  <h4>Admin Kontak</h4>

                  <a
                    href="https://wa.me/628153399639"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 815-3399-639
                    <span className="contact-primary">Utama</span>
                  </a>

                  <a
                    href="https://wa.me/6282365648717"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 823-6564-8717
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon contact-time-icon">
                  <Clock3 size={20} />
                </div>

                <div className="contact-item-content">
                  <h4>Jam Operasional</h4>
                  <p>Senin - Sabtu</p>
                  <p>08.00 - 17.00 WIB</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon contact-location-icon">
                  <MapPin size={20} />
                </div>

                <div className="contact-item-content">
                  <h4>Wilayah Layanan</h4>
                  <p>Medan, Sumatera Utara</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-box contact-action-box">
            <div className="contact-box-heading">
              <div className="contact-box-icon contact-whatsapp-icon">
                <MessageCircle size={23} />
              </div>
              <h3>Hubungi Kami</h3>
            </div>

            <div className="contact-action-content">
              <h4>Butuh Informasi Kursus?</h4>

              <p>
                Jangan ragu untuk menghubungi NAILAH JAYA.
                Kami siap membantu memberikan informasi mengenai
                paket dan layanan kursus mengemudi.
              </p>

              <div className="contact-action-buttons">
                <a
                  href="https://wa.me/628153399639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button contact-button-primary"
                >
                  <MessageCircle size={18} />
                  WhatsApp Utama
                  <span>→</span>
                </a>

                <a
                  href="https://wa.me/6282365648717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button contact-button-secondary"
                >
                  <MessageCircle size={18} />
                  WhatsApp Alternatif
                  <span>→</span>
                </a>
              </div>

              <div className="contact-note">
                <Clock3 size={15} />
                <span>Kami siap membantu selama jam operasional.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
