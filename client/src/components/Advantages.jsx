import { UsersRound, CarFront, CarTaxiFront, FileCheck, ShieldCheck, } from "lucide-react";

function Keunggulan() {
  
  const features = [
    {
      icon: UsersRound,
      title: "Instruktur",
      subtitle: "Berpengalaman",
      description: "Bimbingan instruktur berpengalaman.",
    },
    {
      icon: CarFront,
      title: "Daihatsu Sigra",
      subtitle: "Mobil Kursus",
      description: "Mobil manual dengan fasilitas full AC.",
    },
    {
      icon: CarTaxiFront,
      title: "Antar-Jemput",
      subtitle: "Layanan",
      description: "Memudahkan peserta kursus.",
    },
    {
      icon: FileCheck,
      title: "Pengurusan SIM",
      subtitle: "Layanan Tambahan",
      description: "Tersedia layanan pengurusan SIM.",
    },
  ];

  return (
    <section className="advantages" id="advantages">
      <div className="advantages-container">
        <div className="advantages-heading">
          <span className="advantages-label">
            <ShieldCheck size={15} />
            Mengapa Memilih Kami
          </span>

          <h2>
            Keunggulan Kursus Mengemudi{" "}
            <span>NAILAH JAYA</span>
          </h2>

          <p>
            Didukung fasilitas dan layanan untuk memberikan
            pengalaman belajar mengemudi yang nyaman.
          </p>
        </div>

        <div className="advantages-grid">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className={`advantage-card ${item.type === "stat" ? "stat-card" : ""}`}
                key={index}
              >
                <div className="advantage-icon">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Keunggulan;
