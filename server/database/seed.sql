-- Data awal paket. Harga mengikuti tampilan frontend (Anggota 1).
-- CATATAN: konfirmasi ulang harga dengan mitra sebelum produksi.

INSERT INTO packages (code, name, duration_days, price, description) VALUES
  ('A', 'Paket A', 3,  450000,  '3 hari, 1 jam per hari'),
  ('B', 'Paket B', 5,  650000,  '5 hari, 1 jam per hari'),
  ('C', 'Paket C', 6,  700000,  '6 hari, 1 jam per hari'),
  ('D', 'Paket D', 7,  800000,  '7 hari, 1 jam per hari'),
  ('E', 'Paket E', 9,  900000,  '9 hari, 1 jam per hari'),
  ('F', 'Paket F', 11, 1100000, '11 hari, 1 jam per hari'),
  ('G', 'Paket G', 15, 1450000, '15 hari, 1 jam per hari'),
  ('H', 'Paket H', 20, 1900000, '20 hari, 1 jam per hari')
ON CONFLICT (code) DO NOTHING;

INSERT INTO branches (name, address, is_main) VALUES
  ('Martubung (Pusat)', 'Jl. Pancing I, Martubung', TRUE),
  ('Tanah Enam Ratus', 'Jl. Tanah Enam Ratus, depan JNE', FALSE),
  ('Marelan Pasar 3', 'Marelan Pasar 3', FALSE)
ON CONFLICT (name) DO NOTHING;