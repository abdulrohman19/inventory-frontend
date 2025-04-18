# 🚀 Inventory Frontend

Frontend aplikasi pengelolaan inventaris barang menggunakan **SvelteKit** dan **Skeleton UI**. Proyek ini merupakan bagian untuk menguji logika dan algoritma dalam membangun aplikasi CRUD yang kompleks dan dinamis.

## ✨ Fitur Utama

- ✅ **Tambah Barang**  
  Form input dengan validasi harga dan stok.

- 📃 **Lihat Daftar Barang**  
  Menampilkan semua barang, filter berdasarkan kategori dan stok minimum.

- 🛠️ **Edit Barang**  
  Form pre-filled, validasi pengurangan stok tidak boleh negatif.

- 🗑️ **Hapus Barang**  
  Hanya bisa menghapus barang dengan stok = 0, dengan konfirmasi.

- 🔁 **Manajemen Stok Dinamis**  
  Stok otomatis berkurang saat transaksi penjualan dan peringatan jika stok mendekati batas minimum.

## 📸 Screenshot

> _Tampilan di Smartphone_
<table>
<td><img src="https://github.com/user-attachments/assets/d7242b81-6b6a-42e2-8efa-56a9ec66e199" width=200px></td>
<td><img src="https://github.com/user-attachments/assets/b655682d-2e53-43c4-acea-c594e4cb4a2c" width=200px></td>
<td><img src="https://github.com/user-attachments/assets/b7760bf2-3d29-4203-bd7d-2a2cdd05d06a" width=200px></td>
<td><img src="https://github.com/user-attachments/assets/2e73004e-0951-4a02-a1ea-a38fd8202272" width=200px></td>
</table>

> _Tampilan di Desktop_
<table>
<td><img src="https://github.com/user-attachments/assets/430f6d42-4dbd-4c41-a05a-6de2c30b27cf" width=1000px></td>
<td><img src="https://github.com/user-attachments/assets/7f1ed949-bfd9-436b-a3bd-4136408707b6" width=1000px></td>
<td><img src="https://github.com/user-attachments/assets/a235e0d3-6a52-4ae1-97bd-e0a238f481ab" width=1000px></td>
<td><img src="https://github.com/user-attachments/assets/0a337717-f180-4d6b-979b-ea18872db547" width=1000px></td>
</table>


## ⚙️ Cara Menjalankan Aplikasi

### 1. Clone Repo
git clone https://github.com/abdulrohman19/inventory-frontend.git 

### 2. move folder
cd inventory-frontend

### 3. Install Dependencies
npm install

### 4. Run App
npm run dev
Aplikasi akan berjalan di http://localhost:5173

⚠️ NB:Pastikan backend/API (inventory-backend) sudah berjalan agar data bisa dimuat dan transaksi dapat disimpan.


🧩 Teknologi yang Digunakan
- SvelteKit

- TypeScript

- Skeleton UI – UI framework untuk Svelte

- Tailwind CSS

📁 Struktur Folder (Ringkasan)

<img width="526" alt="image" src="https://github.com/user-attachments/assets/3ab90f0e-0ae5-44c5-bd35-4d885da03800" />




✅ Validasi yang Diterapkan
- Stok tidak boleh < 0

- Harga jual harus > harga beli

- Tidak bisa hapus barang dengan stok > 0

- Konfirmasi sebelum penghapusan

- Transaksi otomatis update stok

- Peringatan stok minimum

🧠 Fitur Tambahan
- UI responsif dan berwarna menarik (menggunakan Skeleton UI, TailwindCss)

- Filter barang by kategori dan stok minimum 

- Notifikasi peringatan stok rendah
