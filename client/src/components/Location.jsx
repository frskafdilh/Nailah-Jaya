import cabang1Image from "../assets/cabang-1.jpg";
import cabang2Image from "../assets/cabang-2.jpg";
import cabang3Image from "../assets/cabang-3.jpg";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Cabang 1",
    address:
      "MMPR+G39, Jl. Pancing I, Besar, Kec. Medan Labuhan, Kota Medan, Sumatera Utara 20252",
    image: cabang1Image,
    mapUrl: "https://maps.app.goo.gl/1e9C7Si6qoPBhmHZ9",
  },
  {
    name: "Cabang 2",
    address: "Jl. Tanah Enam Ratus, depan JNE, Medan, Sumatera Utara",
    image: cabang2Image,
    mapUrl: "",
  },
  {
    name: "Cabang 3",
    address:
      "Jl. Marelan Raya Ps. III No.170 A, Rengas Pulau, Kec. Medan Marelan, Kota Medan, Sumatera Utara 20255",
    image: cabang3Image,
    mapUrl: "https://maps.app.goo.gl/sCSjnpKnsmuf44bv8",
  },
];

function Branches() {
  return (
    <section className="location" id="location">
      <div className="location-container">
        <div className="location-heading">
          <span>
            <MapPin size={16} />
            LOKASI KAMI
          </span>
          <h2>
            Lokasi Cabang <span>Terdekat Anda</span>
          </h2>
          <p>
            Kami hadir melalui tiga lokasi untuk memudahkan Anda mengikuti
            kursus mengemudi.
          </p>
        </div>

        <div className="location-grid">
          {locations.map((item) => (
            <div className="location-card" key={item.name}>
              <div className="location-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="location-content">
                <h3>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {item.name}
                </h3>

                <p>{item.address}</p>

                <a
                  href={
                    item.mapUrl ||
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Maps <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Branches;
