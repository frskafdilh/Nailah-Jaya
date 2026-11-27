import {
  Building2,
  Gauge,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

function Tentang() {
  const values = [
    {
      icon: Gauge,
      number: "01",
      title: "Keterampilan",
      description: "Kemampuan mengemudi dengan baik",
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: "Keselamatan",
      description: "Kesadaran dan kepatuhan berlalu lintas",
    },
    {
      icon: ClipboardCheck,
      number: "03",
      title: "Tanggung Jawab",
      description: "Sikap disiplin selama berkendara",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-heading">
          <div className="about-label">
            <Building2 size={16} />
            TENTANG KAMI
          </div>

          <h2>
            Mengenal Lebih Dekat <span>NAILAH JAYA</span>
          </h2>

          <p>
            Layanan kursus mengemudi dengan fasilitas dan pendampingan
            untuk membantu peserta belajar berkendara secara aman,
            nyaman, dan bertanggung jawab.
          </p>
        </div>

        <div className="about-content">
          <div className="about-description-card">
            
            <p>
              <span className="about-brand">NAILAH JAYA</span> merupakan
              layanan kursus mengemudi yang telah beroperasi selama kurang 
              lebih 4 tahun dan sudah memiliki 3 cabang yang tersebar di kota
              Medan. Kami berfokus pada pembentukan kemampuan berkendara secara
              baik dan bertanggung jawab. Kami memandang bahwa keterampilan
              mengemudi tidak hanya berkaitan dengan penguasaan
              kendaraan, tetapi juga pemahaman terhadap aturan lalu
              lintas dan kesadaran akan keselamatan di jalan.
            </p>

            <p>
              Melalui layanan yang kami hadirkan,{" "}
              <span className="about-brand">NAILAH JAYA</span> berupaya
              menjadi pilihan bagi masyarakat yang ingin
              mengembangkan kemampuan mengemudi dengan memperhatikan
              kedisiplinan, ketelitian, dan tanggung jawab selama
              berkendara.
            </p>
          </div>

          <div className="about-values">
            <div className="about-values-heading">
              <span>
                <ShieldCheck size={17} />
                NILAI YANG KAMI UTAMAKAN
              </span>
            </div>

            <div className="about-value-list">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="about-value-item" key={item.number}>
                    <div className="about-value-icon">
                      <Icon size={19} />
                    </div>

                    <span className="about-value-number">
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;
