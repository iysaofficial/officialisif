# Rencana Perbaikan Error Build

Berikut adalah rencana langkah demi langkah untuk memperbaiki semua error linting yang menyebabkan build gagal.

## Langkah 1: Perbaiki Error `no-unused-vars` (Variabel tidak terpakai)

- **Tujuan:** Menghapus semua variabel yang sudah dideklarasikan tapi tidak pernah digunakan untuk membuat kode lebih bersih.
- **File yang akan diubah:**
    - [`src/Pages/registration/indo-online.js`](src/Pages/registration/indo-online.js): Hapus variabel `formData` di baris 117.
    - [`src/Pages/registration/indo-offline.js`](src/Pages/registration/indo-offline.js): Hapus variabel `formData` di baris 118.
    - [`src/Pages/Home.js`](src/Pages/Home.js): Hapus impor `Timevenue` di baris 11.
    - [`src/components/Banner/ChatBanner.js`](src/components/Banner/ChatBanner.js): Hapus variabel `mystyle` di baris 11.
    - [`src/Pages/registration/inter-online.js`](src/Pages/registration/inter-online.js): Hapus variabel `formData` di baris 124.
    - [`src/Pages/registration/inter-offline.js`](src/Pages/registration/inter-offline.js): Hapus variabel `formData` di baris 124.
    - [`src/Pages/registration/homeindo.js`](src/Pages/registration/homeindo.js): Hapus impor `indonesiaOnlineTerms` dan `indonesiaOfflineTerms` di baris 2.

## Langkah 2: Perbaiki Error `jsx-a11y` (Aksesibilitas)

- **Tujuan:** Memperbaiki masalah aksesibilitas pada elemen HTML untuk memastikan aplikasi dapat digunakan oleh semua orang, termasuk pengguna screen reader.
- **File yang akan diubah:**
    - **`jsx-a11y/heading-has-content`**:
        - `src/Pages/registration/indo-online.js` (Baris 153, 214, 349, 446, 505, 629)
        - `src/Pages/registration/indo-offline.js` (Baris 153, 213, 351, 448, 507, 604)
        - `src/Pages/registration/inter-online.js` (Baris 160, 222, 416, 491, 549, 668)
        - `src/Pages/registration/inter-offline.js` (Baris 160, 222, 418, 493, 551, 639)
        - *Tindakan*: Tambahkan konten teks atau `aria-label` ke dalam elemen heading (`h1`, `h2`, dll.). Jika heading digunakan hanya untuk styling, ganti dengan `div` atau `span`.
    - **`jsx-a11y/accessible-emoji`**:
        - `src/Pages/registration/indo-online.js` (Baris 186)
        - `src/Pages/registration/indo-offline.js` (Baris 185)
        - `src/Pages/registration/inter-online.js` (Baris 193)
        - `src/Pages/registration/inter-offline.js` (Baris 193)
        - `src/components/LoW/2025/index.js` (Baris 68)
        - *Tindakan*: Bungkus emoji dengan `<span>` dan tambahkan `role="img"` serta `aria-label` yang deskriptif. Contoh: `<span role="img" aria-label="Catatan">📝</span>`.
    - **`jsx-a11y/anchor-is-valid`**:
        - `src/components/Banner/ChatBanner.js` (Baris 28)
        - `src/Pages/registration/homeindo.js` (Baris 59, 75)
        - `src/components/SupportIntegration.js` (Baris 62)
        - `src/Pages/registration/homeinter.js` (Baris 64, 78)
        - `src/components/EventSponserLogo.js` (Baris 8)
        - *Tindakan*: Jika elemen `<a>` digunakan sebagai tombol, ganti dengan `<button>`. Jika digunakan sebagai link, tambahkan atribut `href` yang valid (misal, `href="#"` atau `href="/path"`).

## Langkah 3: Perbaiki Error Keamanan `react/jsx-no-target-blank`

- **Tujuan:** Mencegah kerentanan keamanan saat menggunakan `target="_blank"` pada link.
- **File yang akan diubah:**
    - [`src/components/CustomNavbar.js`](src/components/CustomNavbar.js) (Baris 363)
    - [`src/components/LoW/listlowcomponent.js`](src/components/LoW/listlowcomponent.js) (Baris 65)
    - *Tindakan*: Tambahkan `rel="noopener noreferrer"` ke semua elemen `<a>` yang menggunakan `target="_blank"`.

## Langkah 4: Verifikasi

- **Tujuan:** Memastikan semua perbaikan berhasil dan build dapat berjalan tanpa error.
- **Tindakan:**
    1.  Jalankan `npm install` atau `yarn install` untuk memastikan semua dependensi terpasang.
    2.  Jalankan `yarn run build` secara lokal.
    3.  Jika build lokal berhasil, push perubahan ke repository untuk memicu build di Vercel.

Setelah rencana ini disetujui, kita akan beralih ke mode "Code" untuk menerapkan perubahan ini.
