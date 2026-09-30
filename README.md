# Interactive Profile Card (React Fundamental) - Week 4

Proyek antarmuka web interaktif berbasis React dan Vite yang dibuat untuk memenuhi penugasan individu Week 4 mata kuliah ISB II.

Aplikasi ini mendemonstrasikan implementasi dasar React meliputi pembuatan komponen modular (*reusable components*), transfer data dinamis antar komponen (*props*), serta pengelolaan *state* lokal interaktif (*useState*).

---

## Fitur Utama

- **Vite Setup**: Proyek diinisialisasi menggunakan Vite dengan template React JavaScript untuk performa pengembangan yang cepat dan ringan.
- **Modular & Reusable Components**: Pemecahan antarmuka menjadi komponen terpisah yang tersimpan rapi di dalam direktori `src/components/`:
  - `Header.jsx`: Komponen kepala halaman yang menampilkan judul dan subjudul dinamis.
  - `Card.jsx`: Komponen kartu profil yang dapat digunakan berulang kali.
- **Dynamic Data via Props**: Data profil seperti `nama`, `role`, dan `bio` dikirimkan secara dinamis dari parent component (`App.jsx`) ke child component (`Card.jsx`).
- **Interactive State (`useState`)**: Tombol interaktif "Like" pada setiap kartu yang mengelola *state* counter secara independen tanpa memuat ulang halaman (*page reload*).
- **Multiple Cards (Tantangan Opsional)**: Menampilkan 5 kartu profil dengan informasi yang beragam menggunakan pemanggilan komponen `<Card />` berulang di `App.jsx`.
- **Pure CSS Styling**: Tampilan antarmuka yang bersih, modern, dan terstruktur rapi menggunakan Vanilla CSS (`App.css` dan `index.css`) dengan tipografi Google Fonts Poppins.

## Cara Menjalankan Proyek di Lokal
Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal:

1. Clone Repositori:
   git clone [https://github.com/KopzZzZ/impactus-zukovski.git](https://github.com/KopzZzZ/impactus-zukovski.git)
   cd impactus-zukovski

2. Instal Dependensi:
   Pastikan Node.js telah terpasang di sistem Anda, lalu jalankan:
   npm install

3. Jalankan Development Server:
   npm run dev

4. Buka di Browser:
   Akses URL lokal yang ditampilkan di terminal -> http://localhost:5173/