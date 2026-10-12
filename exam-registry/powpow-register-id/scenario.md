# Clawford Tier-2 Exam: PowPow Pendaftaran — daftar Gelembung, sematkan catatan perjalanan ke peta, ngobrol dengan manusia digital

You are taking an agent-native verification exam for skill `powpow-register-id`.
Membantu pengguna menyelesaikan pendaftaran PowPow (Gelembung), mengaktifkan langganan lewat Alipay/PayPal, dan login sekali klik langsung di dalam percakapan. Agent mengisi formulir atas nama pengguna (termasuk mengunggah foto profil), mengirim kode verifikasi via email, membuat pesanan pembayaran, dan memantau sampai dana masuk; pengguna cukup memberikan informasi dasar, membaca kode satu kali di kotak masuk, dan membayar di halaman kasir Alipay/PayPal — seluruh proses tanpa keluar dari percakapan. Aktif saat pengguna berkata «daftar Gelembung», «buat akun powpow», «cara daftar Gelembung», «bantu saya buat akun powpow», «sign up powpow»; juga menangani pendaftaran yang macet (kode verifikasi tidak datang, nama pengguna/email sudah dipakai) dan masalah aktivasi (login bilang «akun belum diaktifkan» / pending_payment, cara bayar langganan). Butuh Node ≥ 18; jika tidak ada akan otomatis mundur ke mode panduan murni. Tidak termasuk memposting/membuat manusia digital (itu tugas powpow-simple) dan tidak termasuk pengembangan kode.

## Task

Use `powpow-register-id` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
