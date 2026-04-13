# 🍄 MycoFarm

Website profil & toko online untuk usaha budidaya jamur tiram premium di Malang.
Dibangun dengan **Next.js 15**, **Tailwind CSS**, dan **DaisyUI**.

---

## 📸 Screenshots

### Navbar & Hero
![Navbar Hero](screenshots/navbar%20hero.png)

### Produk
![Produk](screenshots/produk.png)

### Tentang MycoFarm
![Tentang MycoFarm](screenshots/tentangmycofarm.png)

### Galeri
![Galeri](screenshots/gallery.png)

### Hubungi Kami
![Hubungi Kami](screenshots/hubungikami.png)

---

## 🚀 Fitur

- **Hero** — Animasi Three.js interaktif dengan partikel dan floating shapes
- **Produk** — Katalog jamur segar, baglog, starter kit, dan produk olahan
- **Galeri** — Grid foto dinamis dengan lightbox & fitur upload foto (admin)
- **Tentang** — Profil usaha dengan collage gambar
- **Proses Budidaya** — Langkah-langkah budidaya jamur tiram
- **Kontak** — Form kontak + integrasi WhatsApp
- **Dark mode** — Otomatis mengikuti preferensi sistem
- **Fully responsive** — Mobile-first design

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS + DaisyUI |
| Animasi | Three.js (hero background) |
| Font | Cormorant Garamond (serif display) |
| Deploy | Vercel |

---

## ⚙️ Instalasi & Menjalankan

```bash
# 1. Clone atau ekstrak project
cd mycofarm

# 2. Install dependencies
npm install

# 3. Buat file environment (opsional)
cp .env.example .env.local
# Edit GALLERY_PASSWORD di .env.local

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 🔐 Environment Variables

Buat file `.env.local` di root project:

```env
# Password untuk upload foto ke galeri
# Jika tidak diset, default: mycofarm2024
GALLERY_PASSWORD=passwordkamu
```

---

## 📁 Struktur Project

```
mycofarm/
├── app/
│   ├── api/gallery/        # API upload & fetch foto galeri
│   ├── produk/             # Halaman detail produk
│   │   ├── jamur-tiram-putih/
│   │   ├── jamur-tiram-kuning/
│   │   ├── jamur-tiram-pink/
│   │   ├── baglog-siap-panen/
│   │   ├── starter-kit/
│   │   └── olahan/
│   ├── galeri/             # Halaman galeri penuh
│   ├── tentang/            # Halaman tentang
│   ├── kontak/             # Halaman kontak
│   └── proses-budidaya/    # Halaman proses budidaya
├── components/
│   ├── Hero.tsx            # Section hero dengan Three.js
│   ├── Products.tsx        # Katalog produk
│   ├── Gallery.tsx         # Galeri foto + upload
│   ├── About.tsx           # Tentang kami
│   ├── Budidaya.tsx        # Proses budidaya
│   ├── Nutrition.tsx       # Info nutrisi jamur
│   ├── HealthBenefits.tsx  # Manfaat kesehatan
│   ├── Testimonials.tsx    # Testimoni pelanggan
│   ├── Stats.tsx           # Statistik usaha
│   ├── Contact.tsx         # Form kontak
│   ├── Navbar.tsx          # Navigasi
│   ├── Footer.tsx          # Footer
│   ├── WAFloat.tsx         # Tombol WhatsApp floating
│   └── Cursor.tsx          # Custom cursor
└── public/
    └── images/             # Foto produk & konten lokal
```

---

## 📷 Galeri Admin

Fitur upload foto tersedia di halaman Galeri. Klik tombol **"Upload Foto"** dan masukkan password admin.

- Format yang didukung: JPG, PNG, WebP
- Ukuran maksimal: 5MB per foto
- Foto tersimpan di `public/uploads/gallery/`
- Metadata tersimpan di `public/gallery-data.json`

---

## 📞 Kontak

Nomor WhatsApp dapat diganti di konstanta `WA_NUM` di setiap komponen:

```ts
const WA_NUM = "6281234567890"; // ganti dengan nomor aktif
```

---

## 📄 License

© 2024 MycoFarm. All rights reserved.
