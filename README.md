# Undangan Pernikahan DigitaL Himmel & Frieren

Undangan pernikahan digital berbasis web dengan tema bunga forget-me-not, dibuat sebagai tugas kuliah menggunakan HTML, CSS, Bootstrap, dan JavaScript.

## Fitur

- Cover dengan tombol "Open" dan animasi naik saat dibuka
- Musik latar yang berputar otomatis setelah undangan dibuka
- Cerita pasangan dan detail acara (pemberkatan dan resepsi)
- Dress code dan informasi tamu
- Countdown menuju hari pernikahan
- Galeri pre-wedding dalam bentuk carousel
- Form RSVP dengan halaman penutup setelah konfirmasi
- Efek kelopak bunga berjatuhan

## Teknologi

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Struktur halaman |
| CSS3 | Tampilan, animasi, dan tata letak |
| Bootstrap 5.3 | Grid, carousel, dan komponen form |
| JavaScript | Cover, musik, countdown, RSVP, kelopak, dan fade saat scroll |
| Google Fonts | Font Great Vibes untuk nama pasangan |

## Struktur Folder

```
├── index.html
├── style.css
├── script.js
├── asset_undangan/    (gambar dan carousel)
└── musik/             (musik latar)
```

## Cara Menjalankan

1. Clone repo ini:
   ```
   git clone https://github.com/USERNAME/NAMA-REPO.git
   ```
2. Buka `index.html` di browser, atau gunakan ekstensi **Live Server** di VS Code.
3. Pastikan terhubung ke internet agar Bootstrap dan Google Fonts termuat (keduanya dipanggil lewat CDN).

## Cara Kerja Singkat

- **Cover:** tombol Open menambahkan kelas `naik` ke cover, lalu CSS menggeser cover ke atas dengan `transform` dan `transition`.
- **Musik:** browser memblokir suara otomatis, sehingga musik diputar saat interaksi pertama (paling lambat saat tombol Open diklik).
- **Countdown:** selisih waktu acara dan waktu sekarang dihitung ulang setiap detik dengan `setInterval`.
- **RSVP:** form dicegah reload dengan `preventDefault()`, lalu semua halaman disembunyikan dan halaman penutup ditampilkan.

## Catatan

Form RSVP masih berupa demo tampilan dan belum menyimpan data ke server.
## Pembuat

PUTRI NATASYAH MUMPUNI - 25051204146
Mata Kuliah: PEMROGRAMAN BERBASIS PLATFORM
