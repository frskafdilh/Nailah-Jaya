
import { getBotReply } from "./src/utils/chatbotRules.js";

console.log("=== PENGUJIAN CHATBOT ===");

console.log("\n1. Pertanyaan harga:");
console.log(getBotReply("Berapa harga paket kursus?"));

console.log("\n2. Pertanyaan lokasi:");
console.log(getBotReply("Di mana lokasi cabangnya?"));

console.log("\n3. Pertanyaan pendaftaran:");
console.log(getBotReply("Bagaimana cara mendaftar?"));

console.log("\n4. Pertanyaan jam operasional:");
console.log(getBotReply("Jam operasional"));

console.log("\n5. Pertanyaan sapaan:");
console.log(getBotReply("Halo"));


console.log("\n=== PENGUJIAN TAMBAHAN ===");

console.log("\n6. Pertanyaan tidak dikenal:");
console.log(getBotReply("Apakah besok hujan?"));

console.log("\n7. Pertanyaan antar jemput:");
console.log(getBotReply("Apakah ada layanan antar jemput?"));

console.log("\n8. Variasi pertanyaan harga:");
console.log(getBotReply("Berapa biaya belajar mobil?"));

console.log("\n9. Pertanyaan nomor WhatsApp:");
console.log(getBotReply("Berapa nomor WhatsApp admin?"));

console.log("\n10. Pertanyaan layanan:");
console.log(getBotReply("Apa saja layanan yang tersedia?"));
