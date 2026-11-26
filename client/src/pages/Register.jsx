import { useState } from "react";
import { useLocation } from "react-router-dom";

const packages = [
  { name: "Paket A", duration: "3 Hari", price: 450000 },
  { name: "Paket B", duration: "5 Hari", price: 650000 },
  { name: "Paket C", duration: "6 Hari", price: 700000 },
  { name: "Paket D", duration: "7 Hari", price: 800000 },
  { name: "Paket E", duration: "9 Hari", price: 900000 },
  { name: "Paket F", duration: "11 Hari", price: 1100000 },
  { name: "Paket G", duration: "15 Hari", price: 1450000 },
  { name: "Paket H", duration: "20 Hari", price: 1900000 },
  { name: "Layanan Privat", duration: "1 Jam", price: 150000 },
];

function Register() {
  const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    package: location.state?.packageName || "",
  });

  const selectedPackage = packages.find(
    (item) => item.name === form.package
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulir berhasil diisi. Integrasi pendaftaran akan dibuat nanti.");
  };

  return (
    <section className="register">
      <div className="register-container">
        <div className="register-heading">
          <span>NAILAH JAYA</span>
          <h1>Formulir Pendaftaran</h1>
          <p>
            Lengkapi data diri Anda untuk memulai kursus mengemudi.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Data Calon Siswa</h2>

            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Nomor WhatsApp</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Masukkan nomor WhatsApp"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Alamat</label>
              <textarea
                id="address"
                name="address"
                placeholder="Masukkan alamat lengkap"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Pilihan Kursus</h2>

            <div className="form-group">
              <label htmlFor="package">Paket Kursus</label>
              <select
                id="package"
                name="package"
                value={form.package}
                onChange={handleChange}
                required
              >
                <option value="">Pilih paket kursus</option>
                {packages.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name} - {item.duration}
                  </option>
                ))}
              </select>
            </div>

            {selectedPackage && (
              <div className="register-price">
                <span>Harga Kursus</span>
                <h3>{formatPrice(selectedPackage.price)}</h3>
              </div>
            )}
          </div>

          <button type="submit" className="register-submit">
            Kirim Pendaftaran
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
