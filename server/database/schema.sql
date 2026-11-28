CREATE TABLE IF NOT EXISTS users (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(100) NOT NULL,
  email         VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  phone         VARCHAR(20),
  role          VARCHAR(10)  NOT NULL DEFAULT 'siswa'
                CHECK (role IN ('siswa', 'admin')),
  created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS packages (
  id            SERIAL PRIMARY KEY,
  code          VARCHAR(5)    NOT NULL UNIQUE,
  name          VARCHAR(100)  NOT NULL,
  duration_days INTEGER       NOT NULL CHECK (duration_days > 0),
  price         NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (price >= 0),
  description   TEXT,
  is_active     BOOLEAN       NOT NULL DEFAULT TRUE,
  created_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS branches (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(100) NOT NULL UNIQUE,
  address    TEXT         NOT NULL,
  maps_url   TEXT,
  phone      VARCHAR(20),
  is_main    BOOLEAN      NOT NULL DEFAULT FALSE,
  is_active  BOOLEAN      NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);