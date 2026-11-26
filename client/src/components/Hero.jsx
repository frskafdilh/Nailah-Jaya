function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-brand">NAILAH JAYA</span>

          <h1>
            Tempat Pendaftaran
            <br />
            Kursus Mengemudi
          </h1>

          <h2 className="hero-slogan">
            Cepat, Mudah & Praktis.
          </h2>

          <div className="hero-actions">
            <a href="/register" className="hero-button">
              Daftar Online
            </a>

            <a href="#packages" className="hero-link">
              Lihat Paket Kursus →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
