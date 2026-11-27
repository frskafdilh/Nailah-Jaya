import { Phone, Clock3, MapPin } from "lucide-react";

function Kontak() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <div className="contact-label">
            <Phone size={15} />
            <span>HUBUNGI KAMI</span>
          </div>

          <h4>Membantu Anda Memulai Perjalanan</h4>

          <p>
            Kami siap memberikan informasi dan membantu kebutuhan
            kursus mengemudi Anda.
          </p>
        </div>

        <div className="contact-content">
            <div className="contact-cards">
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

            <div className="contact-note">
              <Clock3 size={15} />
              <span>Kami siap membantu selama jam operasional.</span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
