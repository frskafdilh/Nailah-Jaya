
// ==========================================
// CHATBOT FAQ - NAILAH JAYA
// Anggota 5
// ==========================================

// Data informasi NAILAH JAYA
const chatbotData = {
  packages: [
    { name: "Paket A", duration: "3 Hari", price: 450000 },
    { name: "Paket B", duration: "5 Hari", price: 650000 },
    { name: "Paket C", duration: "6 Hari", price: 700000 },
    { name: "Paket D", duration: "7 Hari", price: 800000 },
    { name: "Paket E", duration: "9 Hari", price: 900000 },
    { name: "Paket F", duration: "11 Hari", price: 1100000 },
    { name: "Paket G", duration: "15 Hari", price: 1450000 },
    { name: "Paket H", duration: "20 Hari", price: 1900000 },
    { name: "Layanan Privat", duration: "1 Jam", price: 150000 },
  ],

  locations: [
    "Cabang 1: Jl. Pancing I, Medan Labuhan.",
    "Cabang 2: Jl. Tanah Enam Ratus, depan JNE, Medan.",
    "Cabang 3: Jl. Marelan Raya Pasar III No.170 A, Medan Marelan.",
  ],

  contacts: [
    "+62 815-3399-639",
    "+62 823-6564-8717",
  ],

  operatingHours: "Senin - Sabtu, pukul 08.00 - 17.00 WIB",
};

// Format harga ke Rupiah
const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
};

// Mengubah pertanyaan menjadi format standar
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ");
};

// Memeriksa apakah pertanyaan mengandung keyword
const containsKeyword = (text, keywords) => {
  return keywords.some((keyword) => text.includes(keyword));
};

// ==========================================
// FUNGSI UTAMA CHATBOT
// ==========================================

export const getBotReply = (question) => {
  const text = normalizeText(question);

  if (!text) {
    return "Silakan tuliskan pertanyaan Anda terlebih dahulu.";
  }

  // 1. INFORMASI LOKASI
  if (
    containsKeyword(text, [
      "lokasi",
      "alamat",
      "cabang",
      "tempat",
      "dimana",
      "di mana",
    ])
  ) {
    return (
      "NAILAH JAYA memiliki tiga lokasi cabang:\n\n" +
      chatbotData.locations.join("\n\n")
    );
  }

  // 2. INFORMASI HARGA DAN PAKET
  if (
    containsKeyword(text, [
      "harga",
      "biaya",
      "tarif",
      "paket",
      "bayar",
    ])
  ) {
    const packageList = chatbotData.packages
      .map(
        (item) =>
          `${item.name} (${item.duration}): ${formatPrice(item.price)}`
      )
      .join("\n");

    return (
      "Berikut daftar paket kursus NAILAH JAYA:\n\n" +
      packageList +
      "\n\nHarga mengikuti informasi pada website. " +
      "Silakan hubungi admin untuk konfirmasi."
    );
  }

  // 3. INFORMASI DURASI
  if (
    containsKeyword(text, [
      "durasi",
      "lama",
      "berapa hari",
      "berapa lama",
      "waktu kursus",
    ])
  ) {
    return (
      "Durasi kursus NAILAH JAYA berbeda berdasarkan paket:\n\n" +
      chatbotData.packages
        .map((item) => `${item.name}: ${item.duration}`)
        .join("\n") +
      "\n\nSilakan pilih paket sesuai kebutuhan Anda."
    );
  }

  // 4. CARA PENDAFTARAN
  if (
    containsKeyword(text, [
      "daftar",
      "pendaftaran",
      "registrasi",
      "mendaftar",
      "formulir",
    ])
  ) {
    return (
      "Cara mendaftar kursus di NAILAH JAYA:\n\n" +
      "1. Buka halaman website NAILAH JAYA.\n" +
      "2. Pilih menu pendaftaran.\n" +
      "3. Isi nama lengkap, nomor WhatsApp, dan alamat.\n" +
      "4. Pilih paket kursus yang diinginkan.\n" +
      "5. Klik tombol Kirim Pendaftaran.\n\n" +
      "Jika membutuhkan bantuan, silakan hubungi admin kami."
    );
  }
  // INFORMASI ANTAR JEMPUT
  if (
    containsKeyword(text, [
      "antar jemput",
      "antar-jemput",
      "jemput",
      "diantar",
    ])
  ) {
    return (
      "Informasi mengenai layanan antar jemput belum " +
      "tercantum dalam data NAILAH JAYA.\n\n" +
      "Silakan hubungi admin kami untuk memastikan " +
      "ketersediaan layanan tersebut.\n\n" +
      "WhatsApp: +62 815-3399-639."
    );
  }
  // 5. INFORMASI LAYANAN
  if (
    containsKeyword(text, [
      "layanan",
      "privat",
      "kursus",
      "mengemudi",
      "belajar",
      "mobil",
    ])
  ) {
    return (
      "NAILAH JAYA menyediakan layanan kursus mengemudi " +
      "dengan pilihan Paket A sampai Paket H serta layanan kursus privat.\n\n" +
      "Silakan lihat halaman Paket Kursus untuk mengetahui " +
      "pilihan durasi dan harga."
    );
  }

  // 6. JAM OPERASIONAL
  if (
    containsKeyword(text, [
      "jam",
      "buka",
      "tutup",
      "operasional",
      "hari kerja",
      "jadwal buka",
    ])
  ) {
    return (
      "Jam operasional NAILAH JAYA:\n\n" +
      chatbotData.operatingHours
    );
  }

  // 7. INFORMASI KONTAK
  if (
    containsKeyword(text, [
      "kontak",
      "nomor",
      "telepon",
      "whatsapp",
      "wa",
      "hubungi",
      "admin",
    ])
  ) {
    return (
      "Anda dapat menghubungi admin NAILAH JAYA melalui:\n\n" +
      `WhatsApp Utama: ${chatbotData.contacts[0]}\n` +
      `WhatsApp Alternatif: ${chatbotData.contacts[1]}\n\n` +
      "Admin siap membantu selama jam operasional."
    );
  }

  // 8. SAPAAN
  if (
    containsKeyword(text, [
      "halo",
      "hai",
      "hello",
      "selamat pagi",
      "selamat siang",
      "selamat sore",
      "assalamualaikum",
    ])
  ) {
    return (
      "Halo! Selamat datang di NAILAH JAYA.\n\n" +
      "Saya asisten virtual yang siap membantu Anda " +
      "mendapatkan informasi mengenai kursus mengemudi.\n\n" +
      "Silakan tanyakan tentang paket, harga, lokasi, " +
      "pendaftaran, atau layanan kami."
    );
  }

 // 9. FALLBACK JIKA KEYWORD TIDAK DIKENALI
return (
  "Maaf, saya belum bisa menemukan informasi yang sesuai dengan pertanyaan tersebut.\n\n" +
  "Untuk informasi lebih lanjut, silakan hubungi admin kami melalui WhatsApp berikut:\n\n" +
  "WhatsApp: 0815-3399-639"
);
};

// Data untuk quick questions chatbot
export const quickQuestions = [
  "Berapa harga paket kursus?",
  "Di mana lokasi cabangnya?",
  "Bagaimana cara mendaftar?",
  "Berapa lama durasi kursus?",
  "Apa jam operasionalnya?",
  "Bagaimana cara menghubungi admin?",
];