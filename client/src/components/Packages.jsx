import { useNavigate } from "react-router-dom";
import { CarFront } from "lucide-react";

const packages = [
  { name: "Paket A", duration: "3 Hari", price: "Rp450.000" },
  { name: "Paket B", duration: "5 Hari", price: "Rp650.000" },
  { name: "Paket C", duration: "6 Hari", price: "Rp700.000" },
  { name: "Paket D", duration: "7 Hari", price: "Rp800.000" },
  { name: "Paket E", duration: "9 Hari", price: "Rp900.000" },
  { name: "Paket F", duration: "11 Hari", price: "Rp1.100.000" },
  { name: "Paket G", duration: "15 Hari", price: "Rp1.450.000" },
  { name: "Paket H", duration: "20 Hari", price: "Rp1.900.000" },
];

function Packages() {
  const navigate = useNavigate();

  return (
    <section className="packages" id="packages">
      <div className="packages-container">
        <div className="packages-heading">
          <div className="packages-label">
            <CarFront size={16} />
            PILIHAN KURSUS
          </div>
          <h2>
            <span>Paket Kursus</span> Mengemudi
          </h2>
          <p>
            Temukan paket kursus yang sesuai dengan kebutuhan
            dan waktu belajar Anda.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((item) => (
            <div className="package-card" key={item.name}>
              <h3>{item.name}</h3>
              <p className="package-duration">
                {item.duration} · 1 Jam/Hari
              </p>
              <h4>{item.price}</h4>
              <button
                className="package-button"
                onClick={() => navigate("/register", {
                  state: { packageName: item.name },
                })}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>

        <div className="private-package">
          <div>
            <span className="private-label">LAYANAN TAMBAHAN</span>
            <h3>Kursus Privat</h3>
            <p>Belajar mengemudi secara privat sesuai kebutuhan Anda.</p>
          </div>

          <div className="private-price">
            <span>1 Jam</span>
            <h4>Rp150.000</h4>
            <button
              className="package-button"
              onClick={() => navigate("/register", {
                state: { packageName: "Layanan Privat" },
              })}
            >
              Pilih Privat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
