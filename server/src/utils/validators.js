const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRegister({ name, email, password, phone } = {}) {
  const errors = [];

  if (!name || name.trim().length < 3) {
    errors.push("Nama minimal 3 karakter");
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push("Format email tidak valid");
  }
  if (!password || password.length < 8) {
    errors.push("Password minimal 8 karakter");
  }
  if (phone && !/^[0-9+\-\s]{8,20}$/.test(phone)) {
    errors.push("Format nomor telepon tidak valid");
  }

  return errors;
}

export function validateLogin({ email, password } = {}) {
  const errors = [];
  if (!email || !EMAIL_REGEX.test(email)) errors.push("Format email tidak valid");
  if (!password) errors.push("Password wajib diisi");
  return errors;
}